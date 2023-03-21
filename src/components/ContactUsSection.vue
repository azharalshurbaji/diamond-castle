<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="6"
        sm="10"
      >
        <h1 class="text-h4 text-center">
          Let's Work together ...
        </h1>
        <h3 class="text-h6 text-center">
          How do you take <span class="text-orange">your Coffee</span>?
        </h3>
        <div class="contact_icons text-center ma-5">
          <a href="https://github.com/azharalshurbaji">
            <v-btn
              class="mx-3 pa-3"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-github"
            />
          </a>
          <a href="https://www.linkedin.com/in/azhar-al-shurbaji-8b62b7257">
            <v-btn
              class="mx-3 pa-3"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-linkedin"
            />
          </a>
          <a href="https://codepen.io/azharalshurbaji">
            <v-btn
              class="mx-3 pa-3"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-codepen"
            />
          </a>
        </div>
        <router-link :to="{ name: 'About' ,hash: '#barakah-location' }">
          <div class="contact_icons text-center ma-5">
            <v-icon class="text-grey text-center">
              mdi-google-maps
            </v-icon>
            <span class="text-body-1">
              <strong>Al-Barakah</strong>
            </span>
          </div>
        </router-link>
      </v-col>

      <v-col
        cols="12"
        lg="6"
        sm="10"
      >
        <v-card
          elevation="1"
          class="mt-10"
        >
          <v-card-title class="text-h4 text-orange-lighten-1 text-center">
            … Contact Us …
          </v-card-title>
          <v-form>
            <v-card-text>
              <v-text-field
                type="text"
                label="Your Name"
              />
              <v-text-field
                type="text"
                label="Your Email"
              />
              <v-textarea
                color="cyan"
                label="Your Message"
              />
              <v-btn
                block
                type="submit"
                class="py-3 text-white text-body-1 py-5"
                color="orange"
              >
                Sand Message
              </v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>