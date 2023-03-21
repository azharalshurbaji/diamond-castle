<template>
  <v-row
    justify="center" 
    class="my-5"
  >
    <v-col
      cols="12"
      lg="12"
      sm="12"
    >
      <swiper
        :effect="'coverflow'"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="'auto'"
        :coverflow-effect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :loop="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(3).png"
          >
        </swiper-slide>
        <swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(2).png"
          >
        </swiper-slide>
        <swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(1).png"
          >
        </swiper-slide><swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(4).png"
          >
        </swiper-slide><swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(5).png"
          >
        </swiper-slide><swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(6).png"
          >
        </swiper-slide><swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(7).png"
          >
        </swiper-slide><swiper-slide>
          <img
            src="/src/assets/daimond/swiper-img/d(2).png"
          >
        </swiper-slide><swiper-slide>
          <img src="/src/assets/daimond/swiper-img/d(4).png">
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
</template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
//   import "./style.css";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>

<style>

#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

/* body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


</style>