<template>
  <h1 class="ma-5 text-center text-orange-lighten-4">
    Products Charts
  </h1>
  <v-divider class="mb-3" />
  <FakeChart />
  <!-- <BarChart /> -->
  <AreaChart />
  <!-- <PolarAreaChart /> -->
</template>


<script setup>
import FakeChart from '@/components/DashboardPages/ApexChart/FakeChart.vue';
// import BarChart from '@/components/DashboardPages/ApexChart/BarChart.vue';
import AreaChart from '@/components/DashboardPages/ApexChart/AreaChart.vue';
// import PolarAreaChart from '@/components/DashboardPages/ApexChart/PolarAreaChart.vue';

</script>

<style>

</style>