<template>    
  <section class="background-login">
    <v-container>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
          class="background_color"        
        >
          <div class="ma-3">
            <h1 class="text-h4 text-center text-white">
              New Here ?
            </h1>
            <p class="text-h6 text-center text-white">
              We will Happy if you Joining Us
            </p>
          </div>
          <div class="img_dir">
            <v-img
              src="/src/assets/login/d-1.png"
              width="400px"
              class="ma-5"
              alt="c-5"
            />
          </div>
        </v-col>

        <v-col 
          cols="12"
          lg="6"
        >
          <v-card elevation="0">
            <v-card-title class="text-h4 text-white-lighten-1 text-center ma-5">
              … Login …
            </v-card-title>
            <v-form
              id="supform"
              name="supform"
              @submit.prevent="submit"
            >
              <v-card-text>
                <v-text-field
                  v-model="username"
                  icon="mdi-email"
                  placeholder="Your Email"
                >
                  <v-icon
                    icon="mdi-email"
                    variant="text"
                    type="submit"
                    class="py-3 ma-2"
                  />
                </v-text-field>
                <v-text-field
                  v-model="password"
                  placeholder="password"
                  :type="fieldType"
                >
                  <v-icon
                    icon="mdi-eye"
                    variant="text"
                    type="submit"
                    class="py-3 ma-2"
                    @click.prevent="switchField"
                  />
                </v-text-field>
                
                <v-btn 
                  to="/"
                  block
                  type="submit"
                  class="py-3 bg-white submit_btn"
                  @click.prevent="submit"
                >
                  <!-- @mouseover="mouseOver" -->
                  Login
                </v-btn>
                <br>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- <FooterSection /> -->
</template>

<script>
import user from '@/store/user.js'
import { mapActions } from 'pinia'
// import FooterSection from '@/components/FooterSection.vue'


export default {

  // components: { FooterSection, },



    data: () => ({
        fieldType: 'password',
        username: 'kminchelle',
            // kminchelle
        password: '0lelplR',
            // 0lelplR
    }),
    methods: {
      ...mapActions(user , ['login']),
      submit() {
          this.login(this.username , this.password)
        },
        switchField() {
          this.fieldType = this.fieldType === 'password' ? 'text' : 'password' ;
        },

  }
}

</script>

<style>

.background-login
{
  background-image: url('/src/assets/login/klipartz.com (35).png');
  background-position: left;
  background-size: 200px;
}

/* .background_color{
  background: linear-gradient( #020202 , #d1fcfc) ;
  linear-gradient( #3d97fe , #fcd3d1)
} */
.img_dir{
  margin: 150px 30px 0 30px;
}


</style>