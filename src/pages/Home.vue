<script setup lang="ts">
import HomeHeader from "@/sections/home/Header.vue";
import Banner from "@/sections/home/Banner.vue";
import DemoTemplates from "@/sections/home/demos/DemoTemplates.vue";
import Features from "@/sections/home/features/Features.vue";
import Faq from "@/sections/home/faq/Faq.vue";
import HomeFooter from "@/sections/home/Footer.vue";
</script>

<template>
  <div class="min-h-dvh bg-background">
    <HomeHeader />
    <main>
      <Banner />
      <DemoTemplates />
      <Features />
      <Faq />
    </main>
    <HomeFooter />
  </div>
</template>

