<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  error?: boolean;
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{ (e: "update:modelValue", payload: string | number): void }>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex w-full rounded-lg border border-gray-200 bg-card p-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus:ring-2 focus:ring-ring focus:ring-offset-0 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50',
        {
          'border-error! focus:border-error-100 focus:ring-error-100 placeholder:text-error dark:focus:ring-error/20':
            props.error
        },
        props.class
      )
    " />
</template>
