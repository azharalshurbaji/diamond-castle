<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="10"
        class="my-5"
      >
        <!-- <apexchart 
          width="500" 
          type="bar"
          :options="options"
          :series="series"
        /> -->
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
          :class="background"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({

    //     options: {
    //     chart: {
    //       id: 'vuechart-example'
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    //     }
    //   },
    //   series: [{
    //     name: 'series-1',
    //     data: [30, 40, 45, 50, 49, 60, 70, 91]
    //   }]

    series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          background: {
            colors: ['#fff']
          },
          chartOptions: {
            chart: {
              height: 350,
              type: 'area',
            //   background: ['#000']
            },
            colors: ['#FF512F', '#F09819'],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              colors: ['#FF512F', ' #F09819',],
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            responsive: [{
              breakpoint: 320,
            }]
          },


    }),
}
</script>

<style>

</style>