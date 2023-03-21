<template>
  <v-container>
    <v-row class="ma-6">
      <v-col>
        <h1 class="text-center myFont">
          Team Works
        </h1>
        <p class="text-center text-body-2 text-grey-lighten">
          adipisicing dolor sit amet consectetur adipisicing elit. Cumque, sit.
        </p>
        <h2 class="text-center mt-5 myFont">
          Trainers
        </h2>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        lg="4"
        xs="3"
      >
        <div class="card">
          <div class="front">
            <header>
              <!-- :src="`${item.image}`" -->
              <img
                :src="`${item.image}`"
                :lazy-src="`${item.image}`"
                width="300"
                cover
                alt="av-1"
              >
            </header>
            <h3
              class="myFont "
            >
              {{ item.title }}
            </h3>
            <p class="text-grey-darken-2 text-body-1 mb-3">
              <b>- {{ item.description }} -</b>
            </p>
            <span>
              Hover To see Detalis
              <v-icon>mdi-arrow-right</v-icon>
            </span>
          </div>
          <div class="back">
            <header>
              <img
                :src="item.image"
                :lazy-src="item.image"
                alt="av-1"
              >
            </header>
            <p class="mt-5">
              How do you take <span class="text-orange">your Coffee</span>?
            </p>
            <div class="text-center ma-4">
              <v-btn
                class="offset-1 pa-3 btn-hover"
                elevation="5"
                hover
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-facebook"
                :href="item.facebook"
              />

              <v-btn
                class="offset-1 pa-3 btn-hover"
                elevation="5"
                hover
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-linkedin"
                :href="item.linkedin"
              />

              <v-btn
                class="offset-1 pa-3 btn-hover"
                elevation="5"
                hover            
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-near-me"
                :href="item.telegram"
              />
            </div>
          </div>
        </div>

        <!-- <v-card
          elevation="2"
          max-width="300"
          justify="center"
          align="center"
          class="card"
        >
          <div class="card-image">
            <svg
              class="circle-chart"
              viewBox="0 0 33.83098862 33.83098862"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="circle-chart-background"
                strok-fill="orange"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
              <circle
                class="circle-chart-circle"
                stroke-width="1"
                stroke-dasharray="33,100"
                stroke-linecap="round"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
            </svg>
            <div class="avatar">
              <v-img
                :src="item.image"
                width="200"
                cover
                alt="av-1"
              />
            </div>
          </div>
          <h3
            class="myFont "
          >
            {{ item.title }}
          </h3>
          <p
            class="text-grey"
          />
          <v-card-text
            class="text-grey"
          >
            <p class="text-grey-darken-2 text-body-1 mb-3">
              <b>- {{ item.description }} -</b>
            </p>
          </v-card-text>
          <p>
            How do you take <span class="text-orange">your Coffee</span>?
          </p>
          <div class="text-center ma-4">
            <v-btn
              class="offset-1 pa-3"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-facebook"
            />

            <v-btn
              class="offset-1 pa-3"
              elevation="1"
              hover           
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-linkedin"
              :src="item.src"
            />

            <v-btn
              class="offset-1 pa-3"
              elevation="1"
              hover            
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-whatsapp"
            />
          </div>
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mergeProps } from 'vue'
  export default {
    data: () => ({
        items: [
            { 
                title: 'Mr.Taiseer Almedani',
                image:'https://azharalshurbaji.github.io/diamond-image/img/t-1.jpg',
                description: 'Front-End developer & instructor (Vue js) ',
                
                facebook: 'https://www.facebook.com/taiseer.almedani',
                linkedin: 'https://www.linkedin.com/in/taiseer-almedani',
                telegram: 'https://t.me/Taiseer_Alm',
                
            },
            { 
                title: 'Mr.Rodouan Kareem Aldeen',
                image:'https://azharalshurbaji.github.io/diamond-image/img/r-1.jpg',
                description: 'Software engineer - Fullstack Laravel & Vue developer',
                
                facebook: 'https://www.facebook.com/RoduanKareemAldeen',
                linkedin: 'https://www.linkedin.com/in/roduankd',
                telegram: 'https://t.me/roduankd',
            },
        ],
    }),
    methods: {
      mergeProps,
    },
  }
</script>

<style>


      /* Flip Card */ 
.card
{
    width: 300px;
    height: 400px;
    margin: 50px auto;
    position: relative;
    perspective: 1000px; /* Make- Rotate 3D */

    transform-style: preserve-3d;
    /*to preserve the properties 3D*/
    
    transition: all 1s ease-in-out;
    -webkit-transition: all 1.5s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
}
.card:hover
{
   /* Make Text Veiw Right on Hover */
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
}

.card > div  /* App on The Child Only */
{
    position: absolute;
        top: 0;
        left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgb(255, 255, 255); */
    padding: 10px;
    box-shadow: 0 0 10px rgb(214, 214, 214);
    /* border: 1px solid #ccc; */
    /* color: #777; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
.card .front
{
    /*Make Front Part in At the Front*/
    z-index: 2;
    backface-visibility: hidden;  /* Hidden Front Part in Hover */
    -webkit-backface-visibility: hidden;
}
.card .front header
{
    /* background-color: #444; */
    width: 100%;
    height: 130px;
    margin-bottom: 30px;
    border-radius: 10px 10px 0 0;
    -webkit-border-radius: 10px 10px 0 0;
    -moz-border-radius: 10px 10px 0 0;
    -ms-border-radius: 10px 10px 0 0;
    -o-border-radius: 10px 10px 0 0;
}
.card .front img
{
    position: relative;
        top: 25px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;

}
.card .front h3
{
    margin-bottom: 5px;
    /* color: rgb(255, 180, 95); */
    letter-spacing: 2px;
}
.card .front p
{
    margin: 0 auto;
    width: 90%;
    line-height: 1.7;
}
.card .front span
{
    display: inline-block;
    margin-top: 30px;
    color: rgba(201, 201, 201, 0.548);
    font-weight: bold;
}
.card .back
{
    z-index: 1;
    /*MakeBackPartinAttheback*/
    transform: rotateY(180deg);  /* Make Text Veiw Right on Hover */
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);

    backface-visibility: hidden;  /* Hidden Front Part in Hover */

}
.card .back header 
{
  display: grid;
  justify-content: center;
  align-items: center; 
  width: 100%;
  border-radius: 20px;
}
.card .back img
{
    position: relative;
        top: 0px;
    width: 200px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}
.card .back ul
{
    padding: 0;
    list-style: none;
    line-height: 2;
}



</style>