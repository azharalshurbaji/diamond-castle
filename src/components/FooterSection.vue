<template>
  <v-footer class="mt-10 pt-5">
    <v-row
      justify="space-between"
      no-gutters
    >
      <v-col
        cols="12"
        lg="2"
        sm="3"
        class="ml-5"
      >
        <p class="text-h5">
          <v-icon 
            icon="mdi-diamond-stone" 
            color="orange" 
          />
          <strong>Diamond Castle</strong>
        </p>
        <p class="text-body-2 font-weight-light my-3 ml-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, omnis doloremque beatae nihil id iusto!
        </p>
      </v-col>
      
      <v-col
        cols="12"
        lg="2"
        sm="3"
      >
        <h1 class="text-h5 text-uppercase">
          shop
        </h1>
        <v-btn
          variant="text"
        >
          Home
        </v-btn>
        <br>
        <v-btn
          variant="text"
        >
          About
        </v-btn>
        <br>
        <v-btn
          variant="text"
        >
          Explore Products
        </v-btn>
        <br>
        <v-btn
          variant="text"
        >
          Wood wall Art
        </v-btn>
        <br>
      </v-col>
      
      <v-col
        cols="12"
        lg="2"
        sm="3"
        class="mr-5"
      >
        <h1 class="text-h6 text-uppercase">
          Contact Me
        </h1>
        <v-btn
          icon="mdi-codepen"
          href="https://codepen.io/azharalshurbaji"
          target="_blank"
          size="small"
          class="my-2"
          color="orange"
          variant="outlined"
          title="codepen"
        />

        <v-btn
          icon="mdi-github"
          href="https://github.com/azharalshurbaji"
          target="_blank"
          size="small"
          class="offset-1 my-2"
          color="orange"
          variant="outlined"
          title="github"
        />
        
        <v-btn
          icon="mdi-linkedin"
          href="https://www.linkedin.com/in/azhar-al-shurbaji-8b62b7257"
          target="_blank"
          size="small"
          class="offset-1 my-2"
          color="orange"
          variant="outlined"
          title="linkedIn"
        />
        <v-btn
          prepend-icon="mdi-phone"
          variant="text"
          size="x-large"
          class=" ml-n5"
          href="tel:+905 000 000 000"
        >
          +905 000-000-000
        </v-btn>
        <br>
      </v-col>

      <v-divider
        class="my-3"
        inset
      />
      <v-col
        class="text-center mt-4"
        cols="12"
      >
        <!-- {{ new Date().getFullYear() }} —  -->
        <strong>
          Designed and Coded by 
          <router-link :to="{ name: 'About' ,hash:'#about-me' }">
            <v-btn
              color="orange"
              variant="text"
            >Azhar Abd al-baqi al-shurbaji</v-btn>
          </router-link> -- 2023
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      // links: [
      //   'Home',
      //   'About Us',
      //   'Team',
      //   'Services',
      //   'Blog',
      //   'Contact Us',
      // ],
    }),
  }
</script>

<style>

</style>