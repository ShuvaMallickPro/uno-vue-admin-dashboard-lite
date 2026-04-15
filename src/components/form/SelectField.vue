<script setup lang="ts">
import { useField } from "vee-validate";
// SHADCN COMPONENTS
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

// ==============================================================
interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
}
// ==============================================================

const props = defineProps<SelectFieldProps>();

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div>
    <Label :for="id" class="inline-block mb-2 text-sm font-medium">{{
      label
    }}</Label>

    <Select :id="id" v-model:model-value="value">
      <SelectTrigger
        :class="{
          'border-error! focus:border-error-100 focus:ring-error-100':
            errorMessage,
        }"
      >
        <SelectValue
          :placeholder="placeholder"
          :class="{
            'text-error': errorMessage,
            'text-gray-400': !value && !errorMessage,
          }"
        />
      </SelectTrigger>

      <SelectContent>
        <slot></slot>
      </SelectContent>
    </Select>

    <span
      role="alert"
      v-if="errorMessage"
      class="inline-block mt-2 text-xs font-medium text-error ms-3"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
