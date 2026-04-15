<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { usePremium } from "@/stores/premium";
import ProBadge from "@/components/premium/ProBadge.vue";

const premium = usePremium();
</script>

<template>
  <button
    type="button"
    class="relative text-gray-500 hover:text-primary"
    @click="premium.open('Language switcher')"
  >
    <Icon icon="material-symbols:language" height="20" />
    <span class="absolute -top-2 -right-3">
      <ProBadge />
    </span>
  </button>
</template>

