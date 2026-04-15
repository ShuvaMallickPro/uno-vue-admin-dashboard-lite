import { ref } from "vue";
import { defineStore } from "pinia";

export const usePremium = defineStore("premium", () => {
  const isOpen = ref(false);
  const featureLabel = ref<string | null>(null);

  const open = (label?: string) => {
    featureLabel.value = label ?? null;
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  return { isOpen, featureLabel, open, close };
});

