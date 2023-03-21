<template>
    <h1 class="ma-5 text-center text-orange-lighten-4">Users Maneger</h1>
  <v-divider class="mb-3" />
  <!-- <h1>users view</h1> -->
  <!-- <h2>All Users: <span>{{ users.length }}</span></h2> -->
  <PolarAreaChart />
  <GetUsers />
</template>

<script setup>
import PolarAreaChart from '@/components/DashboardPages/ApexChart/PolarAreaChart.vue';
import GetUsers from '@/components/DashboardPages/GetUsers.vue';

</script>

<style>

</style>