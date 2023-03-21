<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      lg="12"
      sm="12"
    >
      <v-table>
        <tbody>
          <tr>
            <!-- <td>
              <v-text-field
                v-model="product.category"
                type="text"
              />
            </td>
            <td>
              <v-text-field
                v-model="product.price"
                type="number"
              />
            </td> -->
            
            <td>
              <p class="text-body-1 font-weight-bold">
                {{ id }}
              </p>
              <v-divider />
            </td>
            <td
              class=""
            >
              <v-card width="150">
                <v-img
                  class="edit_img ma-5 "
                  alt="api-img"
                  :src="[0]"
                  height="100"
                />
              </v-card>
            </td>
            <td>
              <p class="text-body-1 font-weight-bold">
                {{ title }}
              </p>
            </td>
            <!-- <td>
              <p class="text-body-1 font-weight-bold">
                {{ category }}
              </p>
            </td> -->
            <td>
              <v-card-title class="text-black-lighten-1">
                <small>&dollar;</small>•<b>{{ price }}</b>
              </v-card-title>
            </td>
            <td>
              <v-card-actions class="">
                <v-btn
                  class="bg-orange-darken-2 text-white rounded-circle"
                  icon="mdi-heart"
                  hover
                  @click="addToCart({id ,title ,price ,image ,category})"
                />
              </v-card-actions>
            </td>
            <td
              size="50"
              class="text-center"
            >
              <product-quantity />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>  
</template>



<script>
import { mapActions, mapState } from 'pinia'
import dashboard from '@/store/dashboard'
import { useProductsStore } from '@/store/products'
import user from '@/store/user';
import ProductQuantity from '../ProductsPage/ProductQuantity.vue';
// import PagintionSection from './PagintionSection.vue'


export default {
  components: { ProductQuantity,  },

    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        rating: {
            type: Object,
            required: true
        },
    },

    data: () => ({
      // items: [],
      page: 1,
      headers: [
        {
          title: 'Product Title',
          key: 'title'
        },
        {
          title: 'Category',
          key: 'category'
        },
        {
          title: 'image',
          key: 'image'
        },
      ]
    }),
    
    computed: {
      ...mapState(user , ['isLoggedIn']),
    ...mapState(useProductsStore, ['ProductsStore'])
  
      // images() {
      //   return this.products.images[0]
      // }
    },

    methods: {
        ...mapActions(dashboard, ["addToCart" , "isDeleted"]),
        ...mapActions(useProductsStore, ['RemoveProduct', 'returnindexProductEdit']),
        
  

    },

}
</script>

<style>



</style>