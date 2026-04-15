<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// TYPE
import type { Friend } from "./Profile";

defineProps<{ item: Friend }>();
</script>

<template>
  <Card class="col-span-full md:col-span-4 2xl:col-span-3">
    <div class="flex flex-col items-center gap-4">
      <Avatar shape="square">
        <AvatarImage :src="item.image" :alt="item.name" />
        <AvatarFallback>{{ item.name[0] }}</AvatarFallback>
      </Avatar>

      <div class="text-center">
        <RouterLink
          to="#"
          class="text-sm font-medium leading-relaxed hover:underline"
        >
          {{ item.name }}
        </RouterLink>

        <p class="text-xs text-gray-600">
          {{ item.designation }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <a
          v-for="social in item.socialMedia"
          :href="social.url === null ? '#' : social.url"
          :key="social.platform"
          target="_blank"
          rel="noopener noreferrer"
          ><button
            class="grid w-7 h-7 text-xs transition-all rounded-full text-muted place-items-center bg-primary-50 hover:bg-primary-100 dark:bg-primary/10"
          >
            <Icon :icon="social.icon" height="15" /></button
        ></a>
      </div>
    </div>
  </Card>
</template>
