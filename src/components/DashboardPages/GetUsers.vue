<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        class="ma-3"
      >
        <v-table
          fixed-header
          height="550px"
          class="text-center"
        >
          <thead height="80px">
            <tr>
              <th class="text-center text-grey text-h6">
                id
              </th>
              <th class="text-center text-grey text-h6">
                image
              </th>
              <th class="text-center text-grey text-h6">
                Name
              </th>
              <th class="text-center text-grey text-h6">
                Email
              </th>
              <th class="text-center text-grey text-h6">
                Address
              </th>
              <th class="text-center text-grey text-h6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <div v-if="LoadingSpinner">
              <LoadingSpinner />
            </div>
            <tr
              v-for="user in users"
              v-else
              :key="user.id"
            >
              <td>
                <p class="text-body-1 font-weight-bold">
                  {{ user.id }}
                </p>
              </td>
              <td>
                <v-img
                  :src="user.image"
                  width="100"
                  class="rounded-circle my-3 bg-grey-darken-3"
                />
              </td>
              <td>
                <p class="text-body-1 font-weight-bold">
                  {{ user.firstName }}
                </p>
              </td>
              <td>
                <p class="text-body-1 font-weight-bold">
                  {{ user.email }}
                </p>
              </td>
              <td>
                <p class="text-body-1 font-weight-bold">
                  {{ user.address.city }}
                </p>
              </td>
              <td>
                <p class="text-body-1 font-weight-bold">
                  <v-btn
                    color="red"
                    icon="mdi-delete"
                    class="rounded-circle"
                    variant="outlined"
                    hover
                    @click="isDeleted(user.id)"
                  />
                </p>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import {useAllUsers } from '@/store/allusers'

import  LoadingSpinner  from "@/components/LoadingSpinner.vue";

export default {

  components: { LoadingSpinner, },

    data() {
        return{
          users: null,
          LoadingSpinner: false,
        }
    },
    // computed: {
    //   ...mapStores(useAllUsers)
    // },
 
    mounted() {
    this.loadUsers();
    },
    created() {
      this.loadUsers();
    },
    
  methods: {
    loadUsers() {
      this.LoadingSpinner = true
      this.axios.get('https://dummyjson.com/users')
        .then((response) => {
          this.users = response.data.users;
          this.LoadingSpinner = false
        //    console.log(response);
                  //   console.log(response);
                  })

          .catch(error => {
            if(error)
            {   alert('Loading Field')} 
            })
        },
        
        isDeleted(id) {
        this.axios.delete('https://dummyjson.com/users/'+ id)
        .then((response) => {
            this.loadUsers();
             console.warn(response);
            })
        },
    
  }
}
</script>

<style>

</style>