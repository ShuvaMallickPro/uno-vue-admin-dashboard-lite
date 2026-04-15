import { ref, onMounted, onUnmounted } from "vue";
import { useWindowSize } from "@vueuse/core";
import { defineStore } from "pinia";

export const useSidebar = defineStore("sidebar", () => {
  const isSidebarOpen = ref(false);
  const isSidebarExpand = ref(true);
  const { width } = useWindowSize();

  const handleSidebarToggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const handleSidebarWidthToggle = () => {
    console.log("Before toggle:", isSidebarExpand.value);
    isSidebarExpand.value = !isSidebarExpand.value;
    console.log("After toggle:", isSidebarExpand.value);
  };

  const handleCloseSidebar = () => {
    isSidebarOpen.value = false;
  };

  const handleResize = () => {
    if (width.value > 1023) isSidebarOpen.value = false;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    isSidebarOpen,
    isSidebarExpand,
    handleSidebarToggle,
    handleCloseSidebar,
    handleSidebarWidthToggle,
  };
});
