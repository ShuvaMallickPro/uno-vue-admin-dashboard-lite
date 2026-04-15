import { type VariantProps, cva } from "class-variance-authority";

export { default as Toggle } from "./Toggle.vue";

export const toggleVariants = cva(
  "inline-flex items-center border border-border justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-gray-500/40",
        outline:
          "border bg-transparent uppercase border-gray-200 hover:bg-gray-100 dark:border-gray-50 dark:hover:bg-gray-50",
      },
      size: { default: "h-10 px-3", sm: "size-8 text-xs", lg: "h-11 px-5" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
