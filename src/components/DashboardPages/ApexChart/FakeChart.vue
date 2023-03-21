<template>
  <v-container>
    <!-- <v-row>
      <v-col
        cols="12"
        lg="4"
        sm="3"
        class=""
      >
        <table
          id="animations-example-3"
          class="charts-css column show-labels hide-data data-spacing-5 show-primary-axis"
        >
          <caption> Animation Example #3 </caption> <thead>
            <tr>
              <th scope="col">
                Year
              </th> <th scope="col">
                Progress
              </th>
            </tr>
          </thead> <tbody>
            <tr>
              <th scope="row">
                2016
              </th> <td style="--size:1;">
                <span class="data"> 100 </span>
              </td>
            </tr> <tr>
              <th scope="row">
                2017
              </th> <td style="--size:0.8;">
                <span class="data"> 80 </span>
              </td>
            </tr> <tr>
              <th scope="row">
                2018
              </th> <td style="--size:0.6;">
                <span class="data"> 60 </span>
              </td>
            </tr> <tr>
              <th scope="row">
                2019
              </th> <td style="--size:0.4;">
                <span class="data"> 40 </span>
              </td>
            </tr> <tr>
              <th scope="row">
                2020
              </th> <td style="--size:0.2;">
                <span class="data"> 20 </span>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>

      <v-col
        cols="4"
        lg="4"
        sm="4"
      >
        <div
          class="pie animate no-round"
          style="--p:80;--c:orange;"
        >
          80%
        </div>
      </v-col>
      <v-col
        cols="4"
        lg="4"
        sm="4"
      >
        <div
          class="pie animate no-round"
          style="--p:80;--c:orange;"
        >
          90%
        </div>
      </v-col>
    </v-row> -->
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="4"
        sm="10"
      >
        <v-card class="pa-10 card_info">
          <p class="text-deep-orange-lighten-2 text-h4 mt-n4 mr-n4 text-right">
            <v-icon class="text-right">
              mdi-home-city-outline
            </v-icon>
          </p>
          <p class="text-h5 font-weight-bold">
            Products Number
          </p>
          <p class="text-h5 font-weight-bold">
            50,000 <span>+</span>
          </p>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        sm="10"
      >
        <v-card class="pa-10 card_info">
          <p class="text-deep-orange-lighten-2 text-h4 mt-n4 mr-n4 text-right">
            <v-icon>
              mdi-account-group-outline
            </v-icon>
          </p>
          <p class="text-h5 font-weight-bold">
            Users Number
          </p>
          <p class="text-h5 font-weight-bold">
            60,500 <span>+</span>
          </p>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        sm="10"
      >
        <v-card class="pa-10 card_info">
          <p class="text-deep-orange-lighten-2 text-h4 mt-n4 mr-n4 text-right">
            <v-icon>
              mdi-view-carousel-outline
            </v-icon>
          </p>
          <p class="text-h5 font-weight-bold">
            Views
          </p>
          <p class="text-h5 font-weight-bold">
            45,000 <span>+</span>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'
  export default {
    components: {},
    data() {
      return {
        

      
          

      };
    }
  }
</script>

<style>

.card_info 
{
  background: #FF512F;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F09819, #FF512F);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F09819, #FF512F) !important; 
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 0 20px #ff522f83 !important;
}

/* body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
} */

#animations-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
#animations-example-3 tbody {
  overflow-y: hidden; /* remove this to see how it works */
}
#animations-example-3 tbody th {
  background-color: #999595;
  z-index: 1;
}
#animations-example-3 tbody td {
  animation: moving-bars 4s linear 1;
}
@keyframes moving-bars {
  0%  { transform: translateY( 100% ); }
  15% { transform: translateY( 0 ); }
}


@property --p{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

.pie {
  --p:20;
  --b:22px;
  --c:darkred;
  --w:150px;
  
  width:var(--w);
  aspect-ratio:1;
  position:relative;
  display:inline-grid;
  margin:5px;
  place-content:center;
  font-size:25px;
  font-weight:bold;
  font-family:sans-serif;
}
.pie:before,
.pie:after {
  content:"";
  position:absolute;
  border-radius:50%;
}
.pie:before {
  inset:0;
  background:
    radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
          mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
}
.pie:after {
  inset:calc(50% - var(--b)/2);
  background:var(--c);
  transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
}
.animate {
  animation:p 1s .5s both;
}
.no-round:before {
  background-size:0 0,auto;
}
.no-round:after {
  content:none;
}
@keyframes p {
  from{--p:0}
}

</style>