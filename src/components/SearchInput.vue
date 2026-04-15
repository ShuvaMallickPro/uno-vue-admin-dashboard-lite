<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Input } from "@/components/ui/input";

defineProps<{
  modelValue?: string;
  placeholder?: string;
  updateModelValue?: (payload: string | number) => void;
}>();
</script>

<template>
  <div class="relative w-full">
    <Input
      type="search"
      class="rounded-lg ps-9"
      :modelValue="modelValue ?? ''"
      @update:modelValue="
        (val) => {
          $emit('update:modelValue', val);
          if (updateModelValue) updateModelValue(val);
        }
      "
      :placeholder="placeholder ?? 'Search'"
    />

    <Icon
      height="18"
      icon="eva:search-outline"
      class="absolute inset-y-0 my-auto text-muted start-3"
    />
  </div>
</template>
