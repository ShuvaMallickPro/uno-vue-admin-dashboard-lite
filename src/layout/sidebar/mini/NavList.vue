<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

import NavButton from "./NavButton.vue";
import { cn } from "@/lib/utils";
import { NavItem } from "../type";
import { usePremium } from "@/stores/premium";
import ProBadge from "@/components/premium/ProBadge.vue";

const props = defineProps<{ item: NavItem }>();

const route = useRoute();
const premium = usePremium();

const isHovered = ref(false);
const showChildren = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const menuPosition = ref({
  top: "0px",
  transform: "translateY(0)",
});

const isParentActive = computed(() => {
  if (route.path === props.item.route) return true;
  return (
    props.item.children?.some((child) => child.route === route.path) || false
  );
});

const handleMouseEnter = () => {
  isHovered.value = true;
  showChildren.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
  showChildren.value = false;
};

const calculatePosition = () => {
  if (!menuRef.value) return;

  const parentElement = menuRef.value.parentElement;
  if (!parentElement) return;

  const parentRect = parentElement.getBoundingClientRect();
  const menuRect = menuRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const spaceAbove = parentRect.top;
  const spaceBelow = windowHeight - parentRect.bottom;

  const menuHeight = menuRect.height;

  let topPosition = parentRect.height / 2;
  let transform = "translateY(-50%)";

  if (menuHeight > spaceBelow * 2) {
    if (spaceAbove > spaceBelow) {
      topPosition = 0;
      transform = "translateY(-80%)";
    } else {
      topPosition = parentRect.height;
      transform = "translateY(0)";
    }
  }

  menuPosition.value = { top: `${topPosition}px`, transform };
};

onMounted(() => {
  window.addEventListener("scroll", calculatePosition);
  window.addEventListener("resize", calculatePosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", calculatePosition);
  window.removeEventListener("resize", calculatePosition);
});

watch(showChildren, (newValue) => {
  if (newValue) {
    nextTick(() => {
      calculatePosition();
    });
  }
});
</script>

<template>
  <div v-if="!item.children">
    <button
      v-if="item.isPro"
      type="button"
      class="w-full"
      @click="premium.open(item.label)"
    >
      <NavButton :isActive="false" :icon="item.icon" />
    </button>

    <RouterLink v-else :to="item.route">
      <NavButton :isActive="route.path === item.route" :icon="item.icon" />
    </RouterLink>
  </div>

  <div
    v-else
    class="relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <NavButton :isActive="isParentActive" :icon="item.icon" />

    <div
      ref="menuRef"
      :style="menuPosition"
      :class="
        cn(
          'min-w-40 absolute left-full p-2 ms-1 w-max bg-card z-50 rounded-lg shadow-sm transition-opacity duration-300 opacity-0 pointer-events-none',
          { 'opacity-100 pointer-events-auto': showChildren }
        )
      "
    >
      <template v-for="child in item.children" :key="child.route">
        <button
          v-if="child.isPro"
          type="button"
          @click="premium.open(child.label)"
          :class="
            cn(
              'text-gray-600 flex w-full items-center gap-2 p-3 text-sm truncate duration-300 ease-in-out rounded-lg hover:bg-primary-25 hover:text-primary dark:hover:bg-primary/5'
            )
          "
        >
          <span class="w-1 h-1 rounded-full ms-1 me-2 bg-gray-600"></span>
          <span class="min-w-0 truncate">{{ child.label }}</span>
          <span class="ms-auto"><ProBadge /></span>
        </button>

        <RouterLink
          v-else
          :to="child.route"
          :class="
            cn(
              'text-gray-600 flex items-center gap-2 p-3 text-sm truncate duration-300 ease-in-out rounded-lg hover:bg-primary-25 hover:text-primary dark:hover:bg-primary/5',
              {
                'text-primary bg-primary-25 dark:bg-primary/5':
                  route.path === child.route,
              }
            )
          "
        >
          <span
            :class="
              cn('w-1 h-1 rounded-full ms-1 me-2', {
                'bg-primary bubble-effect': route.path === child.route,
                'bg-gray-600': route.path !== child.route,
              })
            "
          ></span>

          <span>{{ child.label }}</span>
        </RouterLink>
      </template>
    </div>
  </div>
</template>
