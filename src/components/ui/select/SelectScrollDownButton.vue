<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  SelectScrollDownButton,
  useForwardProps,
  type SelectScrollDownButtonProps
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <Icon icon="lucide:chevron-down" class="w-4 h-4" />
    </slot>
  </SelectScrollDownButton>
</template>
