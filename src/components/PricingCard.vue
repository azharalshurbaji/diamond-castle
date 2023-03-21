<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <h1 class="text-h3 myFont font-weight-bold text-center my-5">
          <v-icon
            size="25"
            color="warning"
          >
            mdi-minus
          </v-icon>
          Overview
          <v-icon
            size="25"
            color="warning"
          >
            mdi-minus
          </v-icon>
        </h1>
        <p class="text-grey text-center">
          adipisicing dolor sit amet consectetur adipisicing elit. Magnam aut velit reiciendis in quisquam ex.
          adipisicing dolor sit amet consectetur adipisicing elit. Magnam aut velit reiciendis in quisquam ex.
        </p>
      </v-col>
    </v-row>
    <v-row
      justify="space-around "
      align="center"
    >
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="12"
        align="center"
      >
        <div
          data-aos="fade-down-left"
          data-aos-duration="1600"
        >
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'orange-darken-1 && text-white' : undefined"
                width="280"
                height="200"
                elevation="5"
                class="mt-5"
              >
                <v-card-text class="ma-10">
                  <p class="text-h4 text-center font-weight-bold ">
                    Products 
                  </p>
                  <p class="text-h5 text-center font-weight-bold">
                    50,000 <span>+</span>
                  </p>
                <!-- <div class="text-h4 text-center mt-4 ml-1 mb-2">
                  <sup>$</sup><b>19</b><sup>00</sup>
                </div> -->
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </div>
      </v-col>

      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="12"
        class="parent_hover"
        align="center"
      >
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600"
        >
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'red' : undefined"
                width="280"
                height="200"
                elevation="5"
                class="bg-orange-darken-2 child_hover"
              >
                <v-card-text class="ma-10">
                  <p class="text-h4 text-center font-weight-bold ">
                    Users
                  </p>
                  <p class="text-h5 text-center font-weight-bold">
                    60,500 <span>+</span>
                  </p>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </div>
      </v-col>

      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="12"
        align="center"
      >
        <div
          data-aos="fade-down-right"
          data-aos-duration="1600"
        >
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'orange-darken-1 && text-white' : undefined"
                width="280"
                height="200"
                elevation="5"
                class="mt-5 "
              >
                <v-card-text class="ma-10">
                  <p class="text-h4 text-center font-weight-bold ">
                    Views
                  </p>
                  <p class="text-h5 text-center font-weight-bold">
                    45,000 <span>+</span>
                  </p>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
      },
      {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
      },
    ],
  }),
}
</script>

<style>




</style>