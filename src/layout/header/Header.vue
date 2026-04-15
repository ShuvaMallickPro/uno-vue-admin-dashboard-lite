<script setup lang="ts">
import { useWindowScroll, useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";
// CUSTOM STORE
import { useSidebar } from "@/stores/sidebar";
import { useSettings } from "@/stores/settings";
// CUSTOM COMPONENTS
import SearchPopover from "./popovers/SearchPopover.vue";
import MessagePopover from "./popovers/MessagePopover.vue";
import ProfilePopover from "./popovers/ProfilePopover.vue";
import LanguagePopover from "./popovers/LanguagePopover.vue";
import NotificationPopover from "./popovers/NotificationPopover.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { y } = useWindowScroll({ behavior: "smooth" });

const settingsStore = useSettings();
const { handleSidebarToggle } = useSidebar();
</script>

<template>
  <header class="sticky top-0 z-12 w-full mb-7 transition-all">
    <div class="px-4 mx-auto max-w-(--breakpoint-2xl) sm:px-7 2xl:px-20">
      <div
        class="flex items-center justify-between py-5 transition-shadow duration-300 ease-in-out border border-t-0 rounded-bl-xl rounded-br-xl sm:py-4 px-7 border-border bg-card"
        :class="{ 'shadow-md': y > 0 }"
      >
        <div class="flex items-center gap-4">
          <button
            class="text-gray-500 lg:hidden hover:text-primary"
            @click="handleSidebarToggle()"
          >
            <Icon icon="iconamoon:menu-burger-horizontal" height="22" />
          </button>

          <!-- SEARCH -->
          <SearchPopover />
        </div>

        <div class="flex items-center gap-5">
          <!-- NOTIFICATION BUTTON WITH POPOVER -->
          <NotificationPopover />

          <!-- MESSAGE BUTTON WITH POPOVER -->
          <MessagePopover />

          <!-- LANGUAGE (PRO) -->
          <LanguagePopover />

          <!-- TEMPLATE DIRECTION BUTTON -->
          <button @click="settingsStore.changeDirection()">
            <Icon
              height="22"
              class="text-gray-500"
              :icon="
                settingsStore.direction === 'rtl'
                  ? 'proicons:align-left'
                  : 'proicons:align-right'
              "
            />
          </button>

          <!-- THEME BUTTON -->
          <button @click="toggleDark()">
            <Icon
              height="20"
              class="text-gray-500 hover:text-primary"
              :icon="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
            />
          </button>

          <!-- PROFILE BUTTON WITH OPTIONS -->
          <ProfilePopover />
        </div>
      </div>
    </div>
  </header>
</template>
