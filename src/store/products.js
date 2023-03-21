// Utilities
import { axios } from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  persist: true,

  state: () => ({
    id: 0,
    productDetails: [],
    searchValue: "",
    // ProductsStore:[],
    
    products: [],
    title: '',
    price: '',
    stock: null,
    
  }),

  getters: {
    getProducts(state){
      return state.products
      },
      getProductsCount(state){
      return state.products.length
      },

    //   filteredSearch() {
    //     return this.products.filter((post) => {
    //     return post.title.toLowerCase().search(this.searchValue.toLowerCase()) !== -1
    //             });
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
    // filteredProduct() {
    //     return this.hide_product ? this.products.filter(t => !t.done) :
    //         this.products;
    // },
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('https://dummyjson.com/products')
        this.products = data.data.products
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    

    removeProduct(i) {
      this.products.splice(i,1)
    },
    
    // addNewProduct(product) {
    //   const id = this.ProductsStore.length + 1
    //   const data = {
    //     id: id,
    //     title: this.title,
    //     price: this.price,
    //     stock: this.stock,

    //   }
    //   this.product.push(data)
    //   this.title = '',
    //   this.price = '',
    //   this.stock = ''
    // },
    
  ShowProductDetails(product)
  {
    this.productDetails = product;
  },
      
  },
})
