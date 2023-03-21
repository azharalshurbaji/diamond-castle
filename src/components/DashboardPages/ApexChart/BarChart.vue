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
      >
        <apexchart 
          width="500" 
          type="bar"
          :options="options"
          :series="series"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({

        options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        colors: ['#FF512F'],
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      responsive: [{
        breakpoint: 320,
      }],
      



    }),
}
</script>

<style>

</style>