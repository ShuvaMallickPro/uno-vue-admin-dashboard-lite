<script setup lang="ts">
import { computed } from "vue";

import Header from "./header/Header.vue";
import Customizer from "./Customizer.vue";
import MobileSidebar from "./MobileSidebar.vue";
import MiniSidebarNav from "./sidebar/mini/MiniSidebarNav.vue";
import SidebarNavigation from "./sidebar/SidebarNavigation.vue";
import PremiumModal from "@/components/premium/PremiumModal.vue";

import { cn } from "@/lib/utils";
import { useSettings } from "@/stores/settings";

const settingsStore = useSettings();
const isSidebarMini = computed(() => settingsStore.sidebarVariant === "mini");
</script>

<template>
  <!-- SIDEBAR NAVIGATION SECTION FOR DESKTOP DEVICE -->
  <aside
    :class="
      cn(
        'fixed h-full start-0 top-0 z-40 hidden border-e border-e-border lg:block bg-card transition-all duration-200',
        { 'w-[80px]': isSidebarMini, 'w-[260px] 2xl:w-[280px]': !isSidebarMini }
      )
    "
  >
    <MiniSidebarNav v-if="isSidebarMini" />
    <SidebarNavigation v-else />
  </aside>

  <main
    :class="
      cn('h-full transition-all duration-300', {
        'ms-[80px]': isSidebarMini,
        'lg:ms-[260px] 2xl:ms-[280px]': !isSidebarMini,
      })
    "
  >
    <!-- HEADER SECTION -->
    <Header></Header>

    <!-- NAVIGATION DRAWER FOR SMALL DEVICE -->
    <MobileSidebar />

    <!-- PAGE / ROUTE VIEW -->
    <div class="px-4 mx-auto max-w-(--breakpoint-2xl) sm:px-7 2xl:px-20">
      <RouterView />
    </div>
  </main>

  <Customizer />
  <PremiumModal />
</template>
