<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { SelectIcon, SelectTrigger, useForwardProps, type SelectTriggerProps } from "radix-vue";
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex w-full items-center justify-between rounded-lg bg-card border border-gray-200 p-3 text-sm ring-offset-background focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-gray-50',
        props.class
      )
    ">
    <slot />
    <SelectIcon as-child>
      <Icon icon="lucide:chevron-down" class="w-4 h-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
