import { ref } from "vue";
import { defineStore } from "pinia";
import { useTextDirection } from "@vueuse/core";

export const useSettings = defineStore("settings", () => {
  const sidebarVariant = ref<"default" | "mini">("default");
  const direction = useTextDirection();

  const changeDirection = () => {
    direction.value = direction.value === "rtl" ? "ltr" : "rtl";
  };

  const handleChangeSidebarVariant = () => {
    sidebarVariant.value =
      sidebarVariant.value === "default" ? "mini" : "default";
  };

  return {
    direction,
    sidebarVariant,
    changeDirection,
    handleChangeSidebarVariant,
  };
});
