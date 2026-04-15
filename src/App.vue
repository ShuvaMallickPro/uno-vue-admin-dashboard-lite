<script lang="ts" setup>
import { Toaster } from "@/components/ui/sonner";
</script>

<template>
  <!-- PAGE CONTENT VIEW -->
  <RouterView />

  <!-- NOTIFICATION TOAST -->
  <Toaster position="top-right" />
</template>
