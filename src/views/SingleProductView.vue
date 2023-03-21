<template>
  <!-- <section class="pt-64 pb-16 "> -->
  <!-- Contributors -->
  <v-row justify="center">
    <v-col cols="12">
      <v-carousel
        show-arrows="hover"
        height="410"
        class="bg-grey-lighten-2"
      >
        <v-carousel-item
          :src="productDetails.images[0]"
        />
        <v-carousel-item
          :src="productDetails.images[1]"
        />
        <v-carousel-item
          :src="productDetails.images[2]"
        />
        <v-carousel-item
          :src="productDetails.images[3]"
        />
        <v-carousel-item
          :src="productDetails.images[4]"
        />
      </v-carousel>
    </v-col>
  </v-row>
  <v-row 
    justify="center"
    class="bg-grey-lighten-4 ma-0 pa-8"
  >
    <v-col
      class=""
      cols="12"
      lg="6"
      sm="12"
    >
      <!-- <v-card class="bg-white h-100 w-75 ">
        <v-card-item class="pt-8"> -->
      <!-- <v-card-title class="text-h5  text-dark pa-2">
        OverView
      </v-card-title> -->
      <v-card-title class="pt-4 text-h4 font-weight-bold">
        {{ productDetails.id }} -
        {{ productDetails.title }}
        <!-- <v-divider
          class="text-center bg-red-darken-4"
          width="10%"
        /> -->
      </v-card-title>
      
      <p class="text-body-1">
        <RatingSection />
        ({{ productDetails.rating }})
      </p>
      <v-card-text class="text-grey-darken-4">
        {{ productDetails.category }} - {{ productDetails.brand }}
      </v-card-text>
      <v-card-text>
        <h2 class="text-h6 text-grey my-2">
          Description :
          <v-divider
            class="text-center bg-grey-darken-2"
            width="20%"
          />
        </h2>
        <div class="mb-2">
          <p class="text-body-2 font-weight-bold">
            {{ productDetails.description }} :
          </p>
          consectetur ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam consectetur aperiam adipisci maiores aliquam? Aliquam laudantium rerum iste eligendi libero? Minima aliquam reprehenderit odit impedit doloremque rerum cupiditate distinctio!
        </div>
      </v-card-text>

      <!-- </v-card-item> -->
      <!-- <div>
        <div
          v-if="!alert"
          class="text-center"
        >
          <v-card-actions class="d-flex justify-center">
          <v-btn
            variant="outlined"
            justify="center"
            class=" bg-red mb-8"
            @click="alert = true"
          >
            SHOW MORE
          </v-btn>
        </div>
        </v-card-actions>
        <v-alert
          v-model="alert"
          border="start"
          variant="tonal"
          closable
          close-label="Close Alert"
          color="deep-purple-accent-4"
          title="Closable Alert"
        >
          Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

          Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
        </v-alert>
      </div> -->
      <!-- </v-card> -->
    </v-col>
    <!-- <v-col cols="6">
      <div class="w-100 h-100">
        <v-img
          :src="productDetails.images[0]"
          class="h-100 w-100"
        />
      </div> -->
    <!-- <v-img  :src="product.images[0]" cover height="273" /> -->
    <!-- </v-col> -->
    <v-col
      cols="12"
      lg="3"
      sm="3"
      class=""
    >
      <v-card-text
        class="bg-grey-lighten-3 text-center text-grey-darken-4"
      >
        <template #default>
          <p class="font-weight-bold text-grey">
            price:
          </p>
          <p class="mt-2 text-h5 font-weight-bold">
            $ • {{ productDetails.price }} 
          </p>
        </template>
      </v-card-text>
    </v-col>
    <v-col
      cols="12"
      lg="4"
      sm="12"
    >
      <v-card-actions>
        <div>
          <v-btn
          
            class="text-orange"
            hover
            variant="outlined"
            @click="addToCart(productDetails) , snackbar = true"
          >
            <div class="text-center">
              <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                color="deep-orange-accent-4"
              >
                <p class="text-body-1">
                  {{ text }}
                </p>

                <template #actions>
                  <v-btn
                    color="white"
                    variant="outlined"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
            <v-icon
              large
              color="orange"
            >
              mdi-cart
            </v-icon>
            add To Cart
          </v-btn>
        </div>
        <!-- <div v-else>
          Added
        </div> -->
        <v-spacer />
        <v-btn
          class="bg-orange text-white"
          hover
          value="product"
        >
          Buy Now
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>
 <script>
import { mapActions, mapState } from "pinia";
import { useProductsStore } from '@/store/products';
import RatingSection from '@/components/RatingSection.vue';
import CartStore from '@/store/cart.js';

export default {

  components: { RatingSection, },

    data(){
      return{
        alert: true,
        snackbar: false,
        text: 'Add to cart Product ...',
        timeout: 2000,
  }
},
    computed: {
      ...mapState(useProductsStore, ['productDetails'])
    },
  methods: {
    ...mapActions(CartStore, ['addToCart']),

  }

}
 </script>