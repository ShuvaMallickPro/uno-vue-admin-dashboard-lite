<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
</script>

<template>
  <Card class="col-span-full">
    <CardContent
      class="flex flex-col-reverse items-center justify-between gap-8 md:gap-4 md:flex-row">
      <div class="text-center md:text-start">
        <h5 class="font-semibold text-gray-dark">Buy & Get 20% Off</h5>
        <p class="mt-1 mb-4 text-sm font-normal text-gray">
          We design theme to make everything better.
        </p>

        <Button>Go Now</Button>
      </div>

      <div class="w-full md:w-56">
        <img
          alt="footer illustration"
          src="/images/illustration/Illustration-2.svg"
          class="w-full" />
      </div>
    </CardContent>
  </Card>
</template>
