<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)">
    <slot>
      <Icon icon="fluent:more-horizontal-16-regular" height="16" class="w-4 h-4 leading-none" />
    </slot>

    <span class="sr-only">More</span>
  </span>
</template>
