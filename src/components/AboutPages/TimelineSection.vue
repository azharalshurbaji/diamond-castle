<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="6"
        sm="6"
      >
        <p class="myFont text-h4 text-center my-5">
          Cours Timeline
        </p>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="6"
        sm="12"
      >
        <v-timeline
          side="end"
          align="start"
        >
          <v-timeline-item
            dot-color="orange-darken-3"
            size="small"
          >
            <div class="text-h5 main_font">
              HTML + CSS
            </div>
            
            <div class="text-caption">
              <p class="text-grey text-body-2">
                14/8/2022
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
            <div class="text-h5 main_font ">
              Bulme Css framework
            </div>
              
            <p class="text-grey text-body-2">
              23/10/2022
            </p>
          </v-timeline-item>

          <v-timeline-item
            dot-color="orange-darken-3"
            size="small"
          >
            <div class="text-h5 main_font ">
              Java script
            </div>
            <p class="text-grey text-body-2">
              2/11/2022
            </p>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        sm="12"
      >
        <v-timeline
          side="end"
          align="start"
        >
          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
            <div class="text-h5 main_font ">
              working on a project <b>Krypto</b>
            </div>
            <p class="text-grey text-body-2">
              21/11/2022
            </p>
          </v-timeline-item>

          <v-timeline-item
            dot-color="orange-darken-3"
            size="small"
          >
            <div class="text-h5 main_font ">
              Start with <b>Vue.js</b>
            </div>
            <p class="text-grey text-body-2">
              24/11/2022
            </p>
          </v-timeline-item>
            
          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
            <div class="text-h5 main_font">
              vuetify
            </div>
            <p class="text-grey text-body-2">
              24/11/2022
            </p>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <!-- <v-divider></v-divider> -->

    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
        class="ma-6"
      >
        <h1 class="text-center ma-3">
          My Skills
        </h1>
      </v-col>
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <div class="d-flex justify-center">
          <v-img
            src="/src/assets/logo/html.png" 
            lazy-src="/src/assets/logo/html.png"
            max-width="90"
            class="ma-5"
          />
          <v-img
            src="/src/assets/logo/css.png" 
            lazy-src="/src/assets/logo/css.png"
            max-width="90"
            class="ma-5"
          />
          <v-img
            src="/src/assets/logo/js.png" 
            lazy-src="/src/assets/logo/js.png"
            max-width="90"
            class="ma-5"
          />
        </div>

        <div class=" d-flex justify-center">
          <v-img
            src="/src/assets/logo/vuejs.png" 
            lazy-src="/src/assets/logo/vuejs.png"
            max-width="90"
            class="ma-5"
          />
          <v-img
            src="/src/assets/logo/bulma.png" 
            lazy-src="/src/assets/logo/bulma.png"
            max-width="120"
            class="ma-5"
          />
          <v-img
            src="/src/assets/logo/bootstrap.png" 
            lazy-src="/src/assets/logo/bootstrap.png"
            max-width="90"
            class="ma-5"
          />
          <v-img
            src="/src/assets/logo/vuetify.svg" 
            lazy-src="/src/assets/logo/vuetify.svg"
            max-width="90"
            class="ma-5"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'HTML & CSS',
        color: 'red-lighten-2',
        icon: 'mdi-star',
      },
      {
        title: 'Bulma Freamwork',
        color: 'purple-lighten-2',
        icon: 'mdi-book-variant',
      },
      {
        title: 'Java Script',
        color: 'green-lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        title: 'Vue Freamwork',
        color: 'indigo-lighten-2',
        icon: 'mdi-buffer',
    },
    
    ],
  }),
}
</script>

<style>

@media screen and (max-width: 1264px) {
  .logo{
    display: block !important;
  }
}

</style>