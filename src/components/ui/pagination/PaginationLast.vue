<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationLast, type PaginationLastProps } from "radix-vue";
import { Icon } from "@iconify/vue";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<PaginationLastProps & { class?: HTMLAttributes["class"] }>(),
  { asChild: true }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <PaginationLast v-bind="delegatedProps">
    <Button :class="cn('w-8 h-8 p-0', props.class)" variant="outline">
      <slot>
        <Icon icon="lucide:chevrons-right" class="w-4 h-4" />
      </slot>
    </Button>
  </PaginationLast>
</template>
