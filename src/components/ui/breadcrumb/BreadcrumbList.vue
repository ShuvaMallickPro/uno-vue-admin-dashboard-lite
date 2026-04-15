<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ol
    :class="
      cn('flex flex-wrap items-center gap-2 break-words text-[13px] font-normal', props.class)
    ">
    <slot />
  </ol>
</template>
