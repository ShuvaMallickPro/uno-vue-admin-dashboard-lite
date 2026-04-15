<script setup lang="ts">
import NavList from "./NavList.vue";
import { miniSidebarNavigation } from "@/data/navigation";
</script>

<template>
  <div class="h-20 px-5 py-6 text-center">
    <RouterLink to="/" class="inline-flex">
      <img
        src="/logos/uno.svg"
        class="w-8"
        alt="Uno Admin & Client Dashboard"
      />
    </RouterLink>
  </div>

  <div class="relative space-y-1">
    <NavList v-for="nav in miniSidebarNavigation" :key="nav.id" :item="nav" />
  </div>
</template>
