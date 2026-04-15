<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationEllipsis, type PaginationEllipsisProps } from "radix-vue";
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('w-8 h-8 flex items-center justify-center', props.class)">
    <slot>
      <Icon icon="lucide:more-horizontal" :size="18" class="text-primary" />
    </slot>
  </PaginationEllipsis>
</template>
