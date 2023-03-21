<template>
  <v-sheet class="border text-center ma-3">
    <v-btn
      icon="mdi-plus"
      @click="quantity ++"
    />
    <span class="text-body-1 px-2">{{ quantity }}</span>
    <v-btn
      v-if="quantity ? 1 : removeFromCart"
      icon="mdi-minus-thick"
      @click="quantity --"
    />
  </v-sheet>
</template>

<script>
export default {
    data: () => ({
        quantity: 1,
        removeCount: 0,
    }),

    methods: {
        // addProduct() {
        //     if( this.addCount)
        //     {
        //          this.addCount += 1 ;
        //     }
        // },
        // removeProduct() {
        //     this.removeCount -= 1 ;
        // }
    },
    // template: '<p>test</p>',

}
</script>

<style>

</style>