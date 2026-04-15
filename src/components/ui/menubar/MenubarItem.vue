<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarItem,
  type MenubarItemEmits,
  type MenubarItemProps,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  MenubarItemProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const emits = defineEmits<MenubarItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex gap-2 cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm font-medium outline-hidden hover:bg-hover focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        props.class
      )
    "
  >
    <slot />
  </MenubarItem>
</template>
