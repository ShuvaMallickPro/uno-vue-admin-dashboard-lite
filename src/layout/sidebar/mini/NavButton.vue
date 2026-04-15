<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

defineProps<{ isActive: boolean; icon: string }>();
</script>

<template>
  <div
    :class="
      cn(
        'mx-2 text-gray-600 p-4 flex justify-center transition-all duration-300 rounded-lg cursor-pointer hover:text-primary-500 hover:font-medium hover:bg-primary-50 dark:hover:bg-primary/5',
        { 'text-primary-500 bg-primary-100 dark:bg-primary/5': isActive }
      )
    "
  >
    <Icon :icon="icon" height="20" />
  </div>
</template>
