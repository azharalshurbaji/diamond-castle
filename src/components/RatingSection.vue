<template>
  <v-rating
    v-model="rating"
    hover
    half-increments
    size="20"
    active-color="yellow-accent-4"
    color="yellow"
  />
</template>


<script>
  export default {
    data: () => ({
        rating: '3.5',
    }),
  }
</script>