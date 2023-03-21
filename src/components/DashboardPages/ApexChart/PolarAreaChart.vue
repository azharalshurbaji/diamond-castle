<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="6"
        sm="10"
      >
        <BarChart />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        sm="10"
      >
        <apexchart
          type="polarArea"
          :options="chartOptions"
          :series="series"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from './BarChart.vue'

export default {

    components: {
        BarChart,
    },

    data() {
      return {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
          chartOptions: {
            chart: {
              type: 'polarArea',
            },
            stroke: {
              colors: ['series']
            },
            fill: {
              opacity: 0.9
            },
            responsive: [{
              breakpoint: 320,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },

      
          

      };
    }
  }
</script>

<style>

</style>