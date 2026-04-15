<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { usePremium } from "@/stores/premium";

const premium = usePremium();

const title = computed(() =>
  premium.featureLabel
    ? `${premium.featureLabel} is a PRO feature`
    : "PRO feature",
);

const upgradeUrl =
  "https://www.templatemonster.com/admin-templates/uno-vue-admin-dashboard-template-with-vite-amp-typescript-477158.html";
</script>

<template>
  <Dialog :open="premium.isOpen" @update:open="premium.close()">
    <DialogContent class="sm:max-w-[520px]">
      <DialogHeader>
        <div class="flex items-center gap-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <Icon icon="material-symbols:lock-outline" height="22" />
          </div>
          <div class="min-w-0">
            <DialogTitle class="truncate">{{ title }}</DialogTitle>
            <DialogDescription class="text-sm text-muted-foreground mt-3">
              This module is locked in the Lite release. Upgrade to PRO to
              unlock the full experience, including advanced pages, workflows,
              and integrations.
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <DialogFooter class="gap-5">
        <Button variant="outline" @click="premium.close()">Not now</Button>
        <a :href="upgradeUrl" target="_blank" rel="noreferrer">
          <Button>Upgrade to PRO</Button>
        </a>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
