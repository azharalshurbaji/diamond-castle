<template>
  <!-- <router-link v-slot="{ HeroSection , route}">
    <transition :name="route.meta.transition || fade">
      <HeroSection :is="HeroSection" />
    </transition>
  </router-link> -->
  
  <HeroSection />
  <TopCategory />
  <FeaturesSection />
  <SwiperCoverflow />
  <PricingCard />
  <TestimonialsSection />
  <ContactUsSection />
  <FooterSection />
</template>

<script setup>
  import HeroSection from '@/components/HeroSection.vue';
  import SwiperCoverflow from '@/components/SwiperCoverflow.vue';
  import TopCategory from '@/components/TopCategory.vue';
  import FeaturesSection from '@/components/FeaturesSection.vue';
  import PricingCard from '@/components/PricingCard.vue';
  import TestimonialsSection from '@/components/TestimonialsSection.vue';
  import ContactUsSection from '@/components/ContactUsSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
</script>
