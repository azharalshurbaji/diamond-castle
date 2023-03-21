<template>
  <router-view />
  <ReloadPWA />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script lang="ts">

import { defineComponent } from "vue";
//  import HelloWorld from "./components/HelloWorld.vue";
 import ReloadPWA from "./components/ReloadPWA.vue";

export default defineComponent({ 
  name: "App", 
   components: {  ReloadPWA, },
});
</script>

