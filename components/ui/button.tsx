import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-[#ff6b35]/40 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[#e64f1a] bg-[#ff6b35] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none",
        outline:
          "border-[#dfd4cd] bg-white/90 text-[#292321] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_0_rgba(61,37,24,0.04),0_6px_16px_rgba(61,37,24,0.06)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#cfc1b9] hover:bg-[#fffcf9] hover:text-[#111] hover:shadow-[0_3px_0_rgba(61,37,24,0.05),0_10px_22px_rgba(61,37,24,0.08)] active:translate-y-0 active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-4 rounded-xl text-sm font-semibold",
        xs: "h-6 gap-1 rounded-lg px-2 text-xs font-semibold [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-lg px-3 text-xs font-semibold [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 rounded-xl px-5 text-sm font-semibold",
        icon: "size-10 rounded-xl",
        "icon-xs":
          "size-6 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-lg",
        "icon-lg": "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
