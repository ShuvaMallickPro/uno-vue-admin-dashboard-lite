<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { SelectScrollUpButton, useForwardProps, type SelectScrollUpButtonProps } from "radix-vue";
import { Icon } from "@iconify/vue";

import { cn } from "@/lib/utils";

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <Icon icon="lucide:chevron-up" class="w-4 h-4" />
    </slot>
  </SelectScrollUpButton>
</template>
