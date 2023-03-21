<template>
  <!-- <HeroSection>
    My Shopping Cart
  </HeroSection> -->
  <section>
    <v-container>
      <v-row>
        <v-col
          v-for="(item , i) in items"
          :key="item.id"
          cols="12"
          lg="4"
          xs="3"
        >
          <v-card
            max-width="344"
          >
            <v-img
              :src="item.thumbnail"
              :lazy-src="item.thumbnail"
              height="200"
            />
            <v-card-title>
              {{ item.title }} 
            </v-card-title>

            <v-card-subtitle>
              ${{ item.price }} - {{ item.category }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                variant="text"
                color="red"
                @click="removeFromCart(i)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <ProductQuantity />
              <br>
              <v-btn
                
                class="bg-blue-lighten-2 text-white"
              >
                Buy Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cart from '@/store/cart';
import { useProductsStore } from '@/store/products';
import ProductQuantity from '@/components/ProductsPage/ProductQuantity.vue';


export default {

    components: { ProductQuantity, },

data: () => ({

}),

    computed: {
        ...mapState(cart, ["items" ,"itemsCount"]),
        ...mapState(useProductsStore, ["products" ])
    },
    methods: {
        ...mapActions(cart , ["removeFromCart"])
    },
}
</script>

<style>

</style>