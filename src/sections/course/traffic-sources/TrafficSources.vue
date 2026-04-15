<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// SHADCN COMPONENTS
import { Card, CardTitle } from "@/components/ui/card";
// CUSTOM COMPOSABLE
import { useChartOptions } from "./useChartOptions";

const { chartOptions, series } = useChartOptions();
</script>

<template>
  <Card class="p-0 col-span-full md:col-span-6 2xl:col-span-4">
    <CardTitle class="px-5 pt-5">Traffic Sources</CardTitle>
    <div class="pb-2 -mt-10">
      <VueApexCharts type="bar" height="360" :options="chartOptions" :series="series" />
    </div>
  </Card>
</template>
