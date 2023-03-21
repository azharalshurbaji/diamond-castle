<template>
  <div class="">
    <div class="text-center container">
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="2"
          xs="3"
        >
          <v-img
            width="200"
            :src="user.image"
            class="mt-7 bg-white rounded-circle layout_img"
          />
        </v-col>
      </v-row>

      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
          xs="3"
        >
          <h1 class="text-h4 text-center ">
            {{ user.firstName + ' ' + user.lastName }}
          </h1>
          <p class="text-h7 text-center text-gray-lighten-5 ">
            <v-icon>mdi-email</v-icon>
            {{ user.email }}
          </p>
          <p class="text-h6 text-center text-gray-lighten-5 ">
            {{ user.phone }}
          </p>
          <p class="text-h7 text-center text-gray-lighten-5 ">
            <v-icon>mdi-gender-female</v-icon>
            {{ user.gender }}
          </p>
          <v-btn 
            to="/cart"
            class="text-white ma-3"
            link
            color="orange"
          >
            <v-icon>mdi-cart</v-icon>
            visit Cart
          </v-btn>
          <v-btn 
            to="/"
            class="text-white ma-3"
            link
            variant="text"
            color="orange"
          >
            Back to home
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>

  {{ userInfo }}
</template>

<script>
import { mapState } from 'pinia';
import alluser from '@/store/alluser';

export default {
    data: () => ({
        userInfo: {}
    }),
    
    computed: {
        ...mapState(alluser ,['users'])
    },

    created() {
        this.axios.get('https://dummyjson.com/users/' + this.user.id , {
            headers: {
                Authorization: 'Bearer ' + this.user.token
            },
        })

        .then(response => {
            this.userInfo = response.data
        })
    },
}
</script>

<style>

.container
{
  width: 60%;
  margin: 50px auto;
  box-shadow: 0 0 20px #d2d3d3;
  /* border: 5px solid rgb(255, 161, 84); */
}

.layout_img
{
  box-shadow: 0 0 15px #dbdfdf;
    border: 1px solid rgb(119, 119, 119);
}

</style>