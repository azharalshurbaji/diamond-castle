// Utilities
// import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('dashboard', {
  persist: true,

  state: () => ({
    items: [],
    products: [],
    loading: false,
  }),

  getters: {
    itemsCount (state) {
      return state.items.length
    }
  },
  actions: {
    // created() {
    //   this.loadProducts();
    // },
    // async loadProducts() {
    //   try {
    //     this.loading = true
    //     const response = await axios.get("https://dummyjson.com/products");
    //     this.loading = false
    //     this.products = response.data.map( (product) => {
    //       this.products.push(product);
    //       console.log(response.data.products);
    //     })
    //   } catch (error) {
    //     this.error = err.message;
    //     if(error){
    //       alert('Loading Field')
    //       console.log('Loading Field');
    //     }
    //   }
    // },


    addToCart(product) {
      this.items.push(product)
      
    },
    removeFromCart(index) {
      this.items.splice(index , 1)
    },

    

  }
})
