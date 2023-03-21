<template>
  <div class="productSection pa-8 text-center">
    <h1 class="text-h4 font-weight-bold pb-2">
      Our Products
    </h1>
    <p class="text-grey font-italic">
      Lorem ipsum dolor sit amet consectetur.
    </p>
  </div>
  <section class="productSection">
    <v-container>
      <v-row class="my-4">
        <v-col 
          cols="12"
          lg="2"
          sm="12"
        >
          <v-select
            v-model="CategoryType"
            label="Category"
            variant="outlined"
            :items="[
              'smartphones',
              'laptops',
              'fragrances',
              'skincare',
              'home-decoration',
              'all',
            ]"
          />
        </v-col>
        <v-spacer />
        <v-col 
          cols="12"
          lg="4"
          sm="12"
        >
          <v-text-field
            v-model="searchValue"
            variant="outlined"
            label="Search..."
          />
          <div
            v-if="searchValue && ! filteredProducts.length"
            class="error"
          >
            <p class="text-h5 text-center text-grey">
              {{ errorMsg }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <div v-if="LoadingSpinner">
          <LoadingSpinner />
        </div>
        <v-col
          v-for="product in filteredProducts"
          v-else
          :key="product.id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-card
            class="mx-auto"
            cover
            max-width="350"
            max-height="600"
          >
            <v-img
              :src="product.thumbnail"
              :lazy-src="product.thumbnail"
              height="273"
            />
            <v-card-title class="text-h5 text-center my-2">
              - {{ product.title }} -
            </v-card-title>
            <v-divider />

            <v-card-title class="text-subtitle-1">
              <v-icon size="small">
                mdi-clover
              </v-icon>
              {{ product.brand }}
            </v-card-title>
            
            <v-card-subtitle>
              {{ product.price }} $ - {{ product.category }}
            </v-card-subtitle>
            <v-card-text>
              {{ trucate(product.description) }}
            </v-card-text>
            <!-- trucate(product . description)  -->
            <v-card-actions>
              <!-- <v-btn
                rounded
                color="primary"
                @click="addToCart(product)"
              >
                <v-icon
                  large
                  color="primary"
                >
                  mdi-cart
                </v-icon>
                add To Cart
              </v-btn> -->
              <v-spacer />

              <v-btn
                rounded
                color="orange"
                variant="outlined"
                block
                value="product"
                :to="{ name: 'singleproduct', params: { id: product.id } }"
                @click="ShowProductDetails(product)"
              >
                More Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { mapActions, mapState } from "pinia";
// import CartStore from '@/store/cart.js';
import { useProductsStore } from '@/store/products';
import  LoadingSpinner  from "@/components/LoadingSpinner.vue";

export default {

  components: { LoadingSpinner, },

  data() {
    return {
      // AllProducts: [],
      errorMsg: "No results Found !",
      CategoryType: null,
      searchValue: "",
      LoadingSpinner: false,
      // products: this.ProductsStore,
    };
  },
  computed: {
    ...mapState(useProductsStore, ['products']),

    // product() {
    //   return {
    //     id: this.id,
    //     title: this.title,
    //     price: this.price,
    //     category: this.category,
    //     images: this.images,
    //   };
    // },
    filteredProducts() {
      // process search input
      if (this.searchValue != "" && this.searchValue) {
        return this.products.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        });
      }
      if (this.CategoryType === "all") {
        return this.products.filter((item) => {
          return item;
        });
      }
      if (this.CategoryType) {
        return this.products.filter((item) => {
          return item.category === this.CategoryType;
        });
      }
      return this.products;
    },
    // filteredSearch() {
    //     if (!this.searchValue) {
    //         return this.products;
    //     }
    //     const re = new RegExp(this.searchValue, "i");
    //     const filteredProducts = this.products.filter(product => {
    //         return (product.title.match(re) ||
    //             product.description.match(re)); 
    //     }); 
    //     return filteredProducts;
    // },
    
  },
  created() {
    // this.LoadProducts();
    this.fetchProducts();
  },

  methods: {
    ...mapActions(useProductsStore, ["fetchProducts"]),


    fetchProducts() {
      this.LoadingSpinner = true
      this.axios.get("https://dummyjson.com/products")

    //  .then(response =>  console.log(response.data))
      .then(response => {this.ProductsStore = response.data.products
      console.log(response )
      // console.log(response.data.products)
      this.LoadingSpinner = false
    })
    .catch(error => {
      if(error)
      {   alert('Loading Field')} 
      })
    },
    trucate(value, length = 50) {
      return value.length <= length
        ? value
        : value.substring(0, length) + "...";
    },

  //  ...mapActions(CartStore, ["addToCart"]),
    ...mapActions(useProductsStore, ["ShowProductDetails"]),
  },
};
</script>

<style>
.productSection {
  /* background-color: #f8f9fa; */
  padding: 50px;
}
</style>