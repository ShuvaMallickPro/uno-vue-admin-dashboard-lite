<script setup lang="ts">
import { useField } from "vee-validate";
// SHADCN COMPONENTS
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// ==============================================================
interface TextAreaFieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  isDisable?: boolean;
}
// ==============================================================

const props = withDefaults(defineProps<TextAreaFieldProps>(), { isDisable: false });

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div>
    <Label v-if="label" :for="id" class="inline-block mb-2 text-sm font-medium">{{ label }}</Label>

    <Textarea
      rows="6"
      :id="id"
      :disabled="isDisable"
      :placeholder="placeholder"
      v-model:model-value="value"
      :class="{
        'border-error! focus:border-error-100 focus:ring-error-100 dark:focus:ring-error/20 dark:focus:border-error/20 placeholder:text-error':
          errorMessage
      }"></Textarea>

    <span
      role="alert"
      v-if="errorMessage"
      class="inline-block mt-2 text-xs font-medium ms-3 text-error">
      {{ errorMessage }}
    </span>
  </div>
</template>
