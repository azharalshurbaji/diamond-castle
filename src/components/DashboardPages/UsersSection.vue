<template>
  <h3>Users Section</h3>
  <section>
    <v-container>
      <v-row>
        <v-col 
          v-for="user in users" 
          :key="user.id"
          cols="12" 
          sm="6" 
          lg="4" 
          xl="3"
        > 
          <UserCard v-bind="user" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import UserCard from '@/components/DashboardPages/UserCard.vue';


export default {
   components: { UserCard },

  data: () => ({
    users: [] 
  }),

  created() {
    this.loadUsers();
  },

  methods: {
    loadUsers() {
      this.axios.get('https://dummyjson.com/users')
      .then(response => this.users = response.data);
    }
    // , { headers: {Authorization : 'Bearer ' + 'token' }}
      // .catch(err=> console.log(err));
    
  },
  // catch(err) {console.log(err)} 

}
</script>

<style>

</style>