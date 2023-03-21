<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <p class="text-h5 text-center mt-15">
          <v-icon color="orange-lighten-1">
            mdi-diamond-stone
          </v-icon>
          Top Categories
        </p>
        <v-tabs
          v-model="tab"
          align-tabs="center"
          class="my-5"
        >
          <v-tab
            prepend-icon="mdi-cards-diamond"
            :value="earring"
            link
          >
            Earring
          </v-tab>
          <v-tab
            prepend-icon="mdi-necklace"
            :value="necklace"
            link
          >
            Necklace
          </v-tab>
          <v-tab
            prepend-icon="mdi-ring"
            :value="ring"
            link
          >
            Rings
          </v-tab>
        </v-tabs>
      
        <v-window
          v-model="tab"
          class="tabs-content"
        >
          <v-window-item
            :value="earring"
            active
            class="content-tow"
          >
            <v-row>
              <v-col
                v-for="earring in earrings"
                :key="earring.id"
                cols="12"
                sm="5"
                lg="4"
                xs="3"
              >
                <v-card height="300">
                  <v-sheet
                    max-width="200"
                    class="mx-auto"
                  >
                    <img
                      :src="`${earring.src}`"
                      :lazy-src="`${earring.src}`"
                      width="200"
                    >
                    <!-- class="rounded-circle" -->
                    <div
                      class="my-3 text-center"
                      cols="12"
                      lg="4"
                      xs="3"
                      sm="2"
                    >
                      <v-sheet class="text-body-2 text-red">
                        {{ earring.title }}
                      </v-sheet>
                      <v-sheet class="text-grey">
                        {{ earring.price }}
                      </v-sheet>
                      <!-- <v-sheet>
                          <v-btn
                            class="text-body-2 text-white ma-2"
                            color="orange"
                            :disabled="!isLoggedIn"
                            @click="addToCart({ src , title ,price})"
                          >
                            <v-icon>mdi-plus</v-icon>
                            Add to cart
                          </v-btn>
                        </v-sheet> -->
                    </div>
                  </v-sheet>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item
            :value="necklace"
            class="content-tow"
          >
            <v-row>
              <v-col
                v-for="necklace in necklaces"
                :key="necklace.id"
                cols="12"
                sm="5"
                lg="4"
                xs="3"
              >
                <v-card height="300">
                  <v-sheet
                    max-width="200"
                    class="mx-auto"
                  >
                    <img
                      :src="`${necklace.src}`"
                      :lazy-src="`${necklace.src}`"
                      width="200"
                    >
                    <!-- class="rounded-circle" -->
                    <div
                      class="my-3 text-center"
                      cols="12"
                      lg="4"
                      xs="3"
                      sm="2"
                    >
                      <v-sheet class="text-body-2 text-red">
                        {{ necklace.title }}
                      </v-sheet>
                      <v-sheet class="text-grey">
                        {{ necklace.price }}
                      </v-sheet>
                      <!-- <v-sheet>
                          <v-btn
                            class="text-body-2 text-white ma-2"
                            color="orange"
                            :disabled="!isLoggedIn"
                            @click="addToCart({ src , title ,price})"
                          >
                            <v-icon>mdi-plus</v-icon>
                            Add to cart
                          </v-btn>
                        </v-sheet> -->
                    </div>
                  </v-sheet>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item
            :value="ring"
            class="content-tow"
          >
            <v-row>
              <v-col
                v-for="ring in rings"
                :key="ring.id"
                cols="12"
                sm="5"
                lg="4"
                xs="3"
              >
                <v-card height="300">
                  <v-sheet
                    max-width="200"
                    class="mx-auto"
                  >
                    <img
                      :src="`${ring.src}`"
                      :lazy-src="`${ring.src}`"
                      width="200"
                      class="ma-5"
                    >
                    <!-- class="rounded-circle" -->
                    <div
                      class="my-3 text-center"
                      cols="12"
                      lg="4"
                      xs="3"
                      sm="2"
                    >
                      <v-sheet class="text-body-2 text-red">
                        {{ ring.title }}
                      </v-sheet>
                      <v-sheet class="text-grey">
                        {{ ring.price }}
                      </v-sheet>
                      <!-- <v-sheet>
                          <v-btn
                            class="text-body-2 text-white ma-2"
                            color="orange"
                            :disabled="!isLoggedIn"
                            @click="addToCart({ src , title ,price})"
                          >
                            <v-icon>mdi-plus</v-icon>
                            Add to cart
                          </v-btn>
                        </v-sheet> -->
                    </div>
                  </v-sheet>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import CartStore from '@/store/cart.js';
import user from '@/store/user'


  export default {

    // components: { ProductsSection },



    data () {
      return {
        tab: null,

        earring: 1,
        necklace: 2,
        ring: 3,

        earrings:[
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(1).png',
          title: '',
          price: '$•9.00',
        },
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(2).png',
          title: '',
          price: '$•10.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(3).png',
          title: '',
          price: '$•30.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(4).png',
          title: '',
          price: '$•50.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(5).png',
          title: '',
          price: '$•70.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/earring/e(6).png',
          title: '',
          price: '$•60.00',
        },
      
      ],

        necklaces:[
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(1).png',
          title: '',
          price: '$•9.00',
        },
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(2).png',
          title: '',
          price: '$•10.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(3).png',
          title: '',
          price: '$•30.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(4).png',
          title: '',
          price: '$•50.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(5).png',
          title: '',
          price: '$•70.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/necklace/n(6).png',
          title: '',
          price: '$•60.00',
        },
      
      ],
      
        rings:[
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(1).png',
          title: '',
          price: '$•9.00',
        },
        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(2).png',
          title: '',
          price: '$•10.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(3).png',
          title: '',
          price: '$•30.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(4).png',
          title: '',
          price: '$•50.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(5).png',
          title: '',
          price: '$•70.00',
        },

        {  
          src: 'https://azharalshurbaji.github.io/diamond-image/img/rings/r(6).png',
          title: '',
          price: '$•60.00',
        },
      
      ],

      rating: 3.5,
    }
  },
    computed: {
      ...mapState(user , ['isLoggedIn']),
    },

    methods: {
        ...mapActions(CartStore, ["addToCart"]),

    
    },
  }
</script>

<style>
/* body
{
  color: orangered;
} */
</style>