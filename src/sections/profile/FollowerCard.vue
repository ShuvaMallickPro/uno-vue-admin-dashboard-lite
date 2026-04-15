<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// TYPE
import type { Follower } from "./Profile";

defineProps<{ item: Follower }>();
</script>

<template>
  <Card class="col-span-full md:col-span-6 2xl:col-span-4">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <Avatar shape="square">
          <AvatarImage :src="item.image" :alt="item.name" />
          <AvatarFallback>{{ item.name[0] }}</AvatarFallback>
        </Avatar>

        <div class="">
          <RouterLink
            to="#"
            class="text-sm font-medium leading-relaxed hover:underline"
          >
            {{ item.name }}
          </RouterLink>

          <div class="flex items-center gap-1">
            <Icon icon="mdi:location" height="15" />
            <p class="text-xs text-gray-600">
              {{ item.location }}
            </p>
          </div>
        </div>
      </div>

      <Button
        size="sm"
        :variant="item.status === 'Follow' ? 'outline' : 'default'"
      >
        {{ item.status }}
      </Button>
    </div>
  </Card>
</template>
