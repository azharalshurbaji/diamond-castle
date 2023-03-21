<template>
  <v-navigation-drawer
    v-model="drawer"
    rail
    expand-on-hover
    permanent
    class="bg-orange"
  >
    <!-- :rail="rail"
    @click.stop="rail = !rail" -->
    <v-app-bar-title class="text-center">
      <v-list-item
        value="account"
        to="/profile"
        class="text-white"
        prepend-icon="mdi-account"
      >
        <v-avatar size="120">
          <v-img
            :src="user.image"
            class="ma-1 rounded-circle bg-orange-lighten-4"
          />
        </v-avatar>
        <p class="text-body-1 text-grey-lighten-4">
          Your Account
        </p>
        <span class="text-h6 text-white">
        
          {{ user.firstName + ' ' + user.lastName }}
        </span>
      </v-list-item>
      <v-divider color="red" />
    </v-app-bar-title>
    
  
    <v-divider />
  
    <!-- density="compact" -->
    <v-list
      nav
    >
      <v-list-item
        prepend-icon="mdi-chart-bell-curve"
        title="Products Charts"
        value="Products Charts"
        to="/fake-chart"
        class="text-white"
      />
      <v-list-item
        prepend-icon="mdi-home-city-outline"
        title="Products Maneger"
        value="Products Maneger"
        to="/products-maneger"
        class="text-white"
      />
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
        to="/users"
        class="text-white"
      />
      <v-list-item
        prepend-icon="mdi-home"
        title="Back to Home"
        value="Back to Home"
        to="/"
        class="text-white"
      />
    </v-list>
  </v-navigation-drawer>
</template>


<script>
import { mapActions, mapState } from 'pinia'
import user from '@/store/user'
  export default {
    data () {
      return {
        drawer: true,
        
        rail: true,
      }
    },
      computed: {
    ...mapState(user, ['isLoggedIn' , 'user']),
  },
  methods: {
    ...mapActions(user , ['logout']),


  }
  }
</script>