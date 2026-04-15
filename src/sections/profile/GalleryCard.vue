<script setup lang="ts">
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
// SHADCN COMPONENTS
import { Card } from "@/components/ui/card";
// Utils
import { dateFormat } from "@/lib/dateFormat";
// TYPE
import type { Gallery } from "./Profile";

const props = defineProps<{ item: Gallery }>();

const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = computed(() =>
  props.item.images.map((img) => ({
    src: img.url,
    alt: img.alt,
  }))
);

// Show lightbox
const showLightbox = (index: number) => {
  if (imgsRef.value.length > 0) {
    indexRef.value = index;
    visibleRef.value = true;
  }
};

// Hide lightbox
const handleHide = () => {
  visibleRef.value = false;
};
</script>

<template>
  <Card class="p-0 col-span-full md:col-span-6 2xl:col-span-4">
    <div class="cursor-pointer overflow-hidden" @click="showLightbox(0)">
      <img
        :src="item.images[0].url"
        :alt="item.images[0].alt"
        class="w-full h-48 object-cover rounded-t-md hover:scale-[1.1] transition-all"
      />
    </div>
    <div class="flex flex-col items-center p-4">
      <p class="text-sm font-medium leading-relaxed hover:underline">
        {{ item.name }}
      </p>
      <p class="text-xs text-gray-600">
        {{ dateFormat(item.createdAt) }}
      </p>
    </div>

    <!-- Lightbox -->
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :loop="true"
      :moveDisabled="imgsRef.length <= 1"
      @hide="handleHide"
    />
  </Card>
</template>
