<template>
  <section class="section">
    <v-container>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
          sm="12"
        >
          <v-card
            elevation="0"
            style="background: none;"
          >
            <v-card-title class="text-center ma-3">
              <span class="headline ">
                ... Add New Item ...
              </span>
            </v-card-title>

            <v-divider />

            <v-card-text>
              <v-container>
                <v-form>
                  <v-row
                    justify="center"
                    align="center"
                  >
                    <v-col
                      cols="12"
                      lg="12"
                      md="4"
                      sm="4"
                    >
                      <v-text-field
                        v-model="title"
                        label="title"
                        color="orange"
                        variant="outlined"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      md="4"
                      sm="4"
                    >
                      <v-text-field
                        v-model="price"
                        prepend-inner-icon=""
                        label="price"
                        color="orange"
                        variant="outlined"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      md="4"
                      sm="4"
                    >
                      <v-text-field
                        v-model="stock"
                        type="number"
                        prepend-inner-icon=""
                        label="Stock"
                        color="orange"
                        variant="outlined"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>
          
            <v-card-actions>
              <v-spacer />
              <v-snackbar
                v-model="snackbar"
                :timeout="2500"
                color="orange-accent-4"
                elevation="24"
                location="right bottom"
              >
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    block
                    color="white"
                    class="ma-2 bg-orange"
                    @click.prevent="addNewProduct()"
                  >
                    <!-- to="/products-maneger" -->
                    Add Product
                  </v-btn>
                </template>

                Product added successfully.
              </v-snackbar>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-divider />

      <v-container>
        <v-row
          justify="center"
          align="center"
          class="fill-height"
        >
          <v-col
            cols="12"
            lg="12"
            sm="12"
            class="ma-3"
          >
            <v-chip
              size="x-large"
              variant="outlined"
              class="pa-5 my-4 text-h5 text-orange"
            >
              <span class="">
                All Products:
                {{ products.length }}
              </span>
            </v-chip>
          </v-col>
          <v-spacer />
          <!-- <v-col
            cols="12"
            lg="6"
            class="ma-3"
          >
            <v-text-field
              ref="search"
              v-model="searchValue"
              hide-details
              label="Search.."
              icon="mdi-search"
              color="white"
              single-line
            />
            <v-spacer />
            <div
              v-if="searchValue && ! filteredSearch.length"
              class="error"
            >
              <p class="text-h5 text-center text-grey">
                {{ errorMsg }}
              </p>
            </div>
          </v-col> -->
        </v-row>
      </v-container>
      <v-divider />

      <!-- <v-btn
        to="/add-new-product"
        color="orange"
        dark
        class="mb-2"
      >
        New Item
      </v-btn> -->

      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <v-table
            theme="dark"
            fixed-header
            height="600"
            class="pa-1 text-center" 
          >
            <thead>
              <tr>
                <th class="text-center text-h6">
                  id
                </th>
                <th class="text-center text-h6">
                  Title
                </th>
                <th class="text-center text-h6">
                  Stock
                </th>
                <th class="text-center text-h6">
                  Price
                </th>
                <th class="text-center text-h6">
                  Actions
                </th>
                <th class="text-center text-h6">
                  Quantity
                </th>
              </tr>
            </thead>
            <!-- <ProductCardDashboard v-bind="product" /> -->

            <tbody>
              <tr
                v-for="(product ,i) in products"
                :key="product.id"
              >
                <td>
                  <p class="text-body-1 font-weight-bold">
                    {{ product.id }}
                  </p>
                </td>
                <!-- <td>
                  <v-card
                    width="150"
                    border
                  >
                    <v-img
                      class="edit_img ma-5 "
                      alt="api-img"
                      :src="product.images[0]"
                      height="100"
                    />
                  </v-card>
                </td> -->

                <td>
                  <v-card-title class="text-body-1 text-center font-weight-bold">
                    {{ product.title }}
                  </v-card-title>
                </td>
                <td>
                  <v-card-title class="text-body-1 text-center font-weight-bold">
                    {{ product.stock }}
                  </v-card-title>
                </td>

                <td>
                  <v-card-title class="text-center text-black-lighten-1">
                    <small>&dollar;</small>•<b>{{ product.price }}</b>
                  </v-card-title>
                </td>
                
                <td>
                  <v-card-actions>
                    <!-- <v-btn
                      class="bg-orange-darken-2 text-white rounded-circle"
                      icon="mdi-heart"
                      hover
                      @click="addToCart({id ,title ,price ,image ,category})"
                    />  -->
                    <v-btn
                      class="text-white rounded-circle"
                      icon="mdi-delete"
                      hover
                      color="orange-darken-2"
                      variant="outlined"
                      @click="removeProduct(i)"
                    /> 
                  </v-card-actions>
                </td>
                <td
                  size="50"
                  class="text-center"
                >
                  <ProductQuantity />
                </td>
              </tr>
            </tbody>

           

          <!-- <v-table
            v-model:items-per-page="itemsPerPage"
            class=""
          >
            <thead>
              <tr class="bg-sucsess">
                <th class="text-center py-2">
                  Id
                </th>
                <th class="text-left py-2">
                  Title
                </th>
                <th class="text-left py-2">
                  Price
                </th>
                <th class="text-left py-2">
                  Percentage
                </th>
                <th class="text-left py-2">
                  Rating
                </th>
                <th class="text-left py-2">
                  Stock
                </th>
                <th class="text-left py-2">
                  Brand
                </th>
                <th class="text-left py-2">
                  Category
                </th>
                <th class="text-left py-2">
                  EDIT
                </th>
                <th class="text-left py-2">
                  DELETE
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ product.product.id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.discountPercentage }}</td>
                <td>{{ product.rating }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.brand }}</td>
                <td>{{ product.category }}</td>
                <td>
                  <router-link to="/EditProduct">
                    <v-icon
                      class="ma-2"
                      @click="returnindexProductEdit(i)"
                    >
                      mdi-circle-edit-outline
                    </v-icon>
                  </router-link>
                </td>
                <td>
                  <v-icon
                    class="ma-2"
                    @click="RemoveProduct(i)"
                  >
                    mdi-delete
                  </v-icon>
                </td>

                <v-divider />
              </tr>
            </tbody>
          </v-table> -->
          </v-table>
        </v-col>
      </v-row>          
    </v-container>
  </section>

  <!-- <v-data-table
    :headers="headers"
    :items="ProductsStore"
  >
    <template #[`item.image`]="{item}">
      <v-img :src="item.raw.images" />
    </template>
  </v-data-table> -->
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '../../store/products';
import ProductQuantity from '../ProductsPage/ProductQuantity.vue';

// import ProductCardDashboard from './ProductCardDashboard.vue'

export default {
  components: { 
    ProductQuantity,
    // ProductCardDashboard 
  },


    data: () => ({
      //? Search Error Message
      errorMsg: "No results Found !",
      
      //? Add New Product
      title: '',
      price: '',
      stock: null,

      snackbar: false,
        
        // page: 1,
        // pageCount: 0,
        // headers: [
        //     {
        //         title: "Product Title",
        //         key: "title"
        //     },
        //     {
        //         title: "Category",
        //         key: "category"
        //     },
        //     {
        //         title: "image",
        //         key: "image"
        //     },
        // ]
    }),
    computed: {
        ...mapState(useProductsStore, ["products", "newProductBadge" ]), 
    },

    created() {
        this.fetchProducts();
    },
    methods: {
      ...mapActions(useProductsStore, ["fetchProducts", "removeProduct"]),
      
      
      addNewProduct() {
        if(!this.title || !this.price || !this.stock)
        {
          alert("Please Full the feilds")
          this.snackbar = false
        } else{
          const id = this.products.length + 1
          const newProduct = {
            id: id,
            title: this.title,
            price: this.price,
            stock: this.stock,
          }
          this.products.push(newProduct);
          this.title = '',
          this.price = '',
          this.stock = ''
          }
      },


        // loadProducts() {
        //   this.axios.get("https://dummyjson.com/products")
        //     .then(response => {this.products = response.data.products
        //     console.log(response.data.products) })
        //     .catch(error => {
        //     if(error)
        //     {   alert('Loading Field')} 
        //     })
        // },
    },

}
</script>

<style>

</style>
