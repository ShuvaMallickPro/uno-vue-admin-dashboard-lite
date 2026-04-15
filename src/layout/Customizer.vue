<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";
// STORES
import { useSettings } from "@/stores/settings";
import { cn } from "@/lib/utils";

const isOpen = ref(false);

const settingsStore = useSettings();
</script>

<template>
  <div
    @click="isOpen = !isOpen"
    class="fixed bottom-5 right-5 size-10 bg-primary-500 text-white rounded-md flex items-center justify-center cursor-pointer"
  >
    <Icon
      icon="mdi-light:settings"
      height="24"
      class="animate-spin [animation-duration:3s]"
    />
  </div>

  <Sheet :open="isOpen" @update:open="isOpen = !isOpen">
    <SheetContent side="right" class="p-0 outline-hidden border-r-0 w-[280px]">
      <SheetHeader class="p-6 border-b border-border">
        <SheetTitle class="text-base font-semibold leading-4"
          >Settings</SheetTitle
        >
        <SheetDescription>Customize the layout and style</SheetDescription>
      </SheetHeader>

      <div class="p-6 space-y-6">
        <div class="space-y-3">
          <p class="text-sm font-medium">Sidebar</p>

          <div class="flex items-center gap-2">
            <div
              @click="settingsStore.handleChangeSidebarVariant"
              :class="
                cn(
                  'text-gray-500 border border-border rounded-md p-4 grow text-center cursor-pointer shadow-xs',
                  {
                    'border-primary text-primary':
                      settingsStore.sidebarVariant === 'default',
                  }
                )
              "
            >
              <span class="text-[13px] font-medium">Default</span>
            </div>

            <div
              @click="settingsStore.handleChangeSidebarVariant"
              :class="
                cn(
                  'text-gray-500 border border-border rounded-md p-4 grow text-center cursor-pointer shadow-xs',
                  {
                    'border-primary text-primary':
                      settingsStore.sidebarVariant === 'mini',
                  }
                )
              "
            >
              <span class="text-[13px] font-medium">Mini</span>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <p class="text-sm font-medium">Text Direction</p>

          <div class="flex items-center gap-2">
            <div
              @click="settingsStore.changeDirection"
              :class="
                cn(
                  'text-gray-500 border border-border rounded-md p-4 grow text-center cursor-pointer shadow-xs',
                  {
                    'border-primary text-primary':
                      settingsStore.direction === 'ltr',
                  }
                )
              "
            >
              <span class="text-[13px] font-medium">LTR</span>
            </div>

            <div
              @click="settingsStore.changeDirection"
              :class="
                cn(
                  'text-gray-500 border border-border rounded-md p-4 grow text-center cursor-pointer shadow-xs',
                  {
                    'border-primary text-primary':
                      settingsStore.direction === 'rtl',
                  }
                )
              "
            >
              <span class="text-[13px] font-medium">RTL</span>
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
