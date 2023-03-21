<template>
  <h1>User Card</h1>
  <v-card>
    <v-card-title> {{ username }} </v-card-title>
    <v-card-text> {{ email }} </v-card-text>
    <v-img
      class="edit_img ma-5 "
      alt="api-img"
      :src="image"
      height="150"
    />
  </v-card>
</template>

<script>
export default {

  props: {    
    id: {
      type: Number,
      required: true
    },
    gender: {
      type: Number,
      required: true
    },
    username: {
        type: String,
        required: true
      },
    email:{
      type: String,
      required: true
    },
    password: {
      type: Number,
      required: true
      },
    phone: {
      type: Number,
      required: true
    },
    birthDate: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }  
  },



}
</script>

<style>

</style>