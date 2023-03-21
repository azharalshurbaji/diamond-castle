<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <SideBarSection />
  </v-app>
</template>

<script setup>
import SideBarSection from '@/layouts/sidebar/SideBarSection.vue';

</script>

<style>

</style>