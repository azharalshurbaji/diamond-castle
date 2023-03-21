<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="12"
        xl="3"
        class="mt-7 my-3"
      >
        <h2
          class="text-h4 text-center myFont"
          color="black"
        >
          <sup>
            <v-icon
              size="25"
              color="warning"
            > mdi-format-quote-open</v-icon>
          </sup>
          What people say about us
          <sup>
            <v-icon
              size="25"
              color="warning"
            > mdi-format-quote-close</v-icon>
          </sup>
        </h2>
        <p class="text-body-1 text-grey ma-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!
        </p>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
      class=""
    >
      <v-col
        cols="12"
        lg="8"
        xl="3"
      >
        <v-card
          rounded="0"
          theme="dark"
          flat
        >
          <div v-if="LoadingSpinner">
            <LoadingSpinner />
          </div>
          <v-window
            v-else
            v-model="onboarding"
          >
            <v-window-item
              v-for="quote in quotes"
              :key="quote.id"
              :value="n"
            >
              <v-card
                justify="center"
                align="center"
                class=" justify-center align-center ma-5"
              >                
                <v-card-item class="justify-center align-center ma-5 " >
                  <!-- <v-img
                    :src="testimonail.avatar"
                    width="70px"
                    class="rounded-circle ma-2"
                  /> -->
                  
                  <p class="text-h2">
                    <v-icon color="warning">
                      mdi-comment-quote-outline
                    </v-icon>
                  </p>
                  <p class="text-h4">
                    {{ quote.author }}
                  </p>
                  <!-- <p class="text-h6">
                    <RatingSection />                    
                    {{ testimonail.rating }}
                  </p> -->
                  <!-- <p class="text-body-1">
                    {{ quote.id }}
                  </p> -->
                  <!-- <p class="text-body-2 text-grey">
                    <v-icon class="text-grey">
                      mdi-google-maps
                    </v-icon>
                    {{ testimonail.location }}
                  </p> -->
                </v-card-item>
                <v-divider />

                <v-card-item
                  class="justify-center align-center"

                >
                  <v-sheet
                    height="150px"
                    class="py-14"
                  >
                    <v-icon
                      color="warning"
                      size="35"
                    >
                      mdi-format-quote-open
                    </v-icon>
                    {{ quote.quote }}
                    <v-icon
                      size="30"
                      color="warning"
                    >
                      mdi-format-quote-close
                    </v-icon>
                  </v-sheet>
                </v-card-item>
              </v-card>
            </v-window-item>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-btn
              variant="plain"
              icon="mdi-chevron-left"
              @click="prev"
            />
            <v-item-group
              v-model="onboarding"
              class="text-center hidden-sm-and-down"
              mandatory
            >
              <v-item
                v-for="n in length"
                :key="`btn-${n}`"
                v-slot="{ isSelected, toggle }"
                :value="n"
              >
                <v-btn
                  :variant="isSelected ? 'outlined' : 'text'"
                  icon="mdi-record"
                  @click="toggle"
                />
              </v-item>
            </v-item-group>
            <v-btn
              variant="plain"
              icon="mdi-chevron-right"
              @click="next"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
// import RatingSection from './RatingSection.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {

  components: { 
    // RatingSection, 
    LoadingSpinner, },

  data: () => ({
    quotes: [],
    length: 9,
    onboarding: 0,
    LoadingSpinner: false,
  }),
  created() {
    // this.loadTestimonals()
    this.loadQuotes()
  },
  methods: {
    loadQuotes() {
      this.LoadingSpinner = true
      // https://testimonialapi.toolcarton.com/api
      axios.get('https://dummyjson.com/quotes', 
      { headers: {Authorization: undefined}}
      )
        .then(response => {
          this.quotes = response.data.quotes,
          this.LoadingSpinner = false });
        },
        next () {
        this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
        },
      prev () {
        this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
        },
      },
    }
</script>
