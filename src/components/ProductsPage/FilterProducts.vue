<template>
  <!-- <v-chip prepend-icon="mdi-vuetify">
    Chip
  </v-chip>
  <v-chip prepend-icon="mdi-vuetify">
    Chip
  </v-chip>
  <v-chip prepend-icon="mdi-vuetify">
    Chip
  </v-chip> -->
  
  <!-- <ul class="tab-choose">
    <li>One</li>
    <li>Tow</li>
    <li>Three</li>
    <li>Four</li>
  </ul> -->
<div></div>

  

       

  <!-- <v-list>
          <template v-for="product in categories">
            <v-list-item-title 
              v-text="product.title"
            />
          </template>
        </v-list> -->
</template>

<script>



export default {
    data: () => ({
      products: [],
      search: '',
      tab: null,
    }),

    computed: {
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.products

        return this.products.filter(product => {
          const text = product.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },


  }

    // data: () => ({
    //     products: [],
    //     searchValue: '',
    // }),
    // computed:{
    //     filterdSearch()
    //     {
    //         const searchValue = this.searchValue.toLowerCase()

    //         if (!searchValue) return this.items

    //         return this.items.filter(item => {
    //         const text = item.text.toLowerCase()

    //         return text.indexOf(searchValue) > -1
    //         })
    //     }
    // },
    // methods: {
    //     ...mapActions(CartStore ,['searchValue'])
    // }


//     data () {
//       return {
//         products: [],
//         searchValue: '',
//     }
//  },
//     computed: {
//         visibleProducts() {
//             return this.filteredSearch.slice(0 ,this.productsVisible)
//         },
//         filteredSearch() {
//             if (!this.searchValue) {
//                 return this.products
//             }
//         const re = new RegExp(this.searchValue, 'i');
//         const filteredProducts = this.products.filter( product =>             {				
// 		return ( product.title.match( re ) || product.body.match( re )); 
//             // return
// 		}); // filteredProducts
// 		return filteredProducts;
//         }
//     },
//     methods: {
//         highlightSearchResults(data) 
//         {
//             if(this.searchValue)
//             {
//                 const re = new RegExp(this.searchValue, 'i');
//                 const highlightedData = data.replace( re, 
//                 `<span class="highlightText">${this.searchValue}</span>` ); 
//                 return highlightedData;
//             }
//         }
//     }
  

</script>
