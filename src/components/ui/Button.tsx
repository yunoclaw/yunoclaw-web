import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        // Main action — teal fill
        primary:   "bg-teal-700 text-white hover:bg-teal-600 shadow-sm hover:shadow-md",
        // Outlined teal
        secondary: "bg-transparent text-teal-700 border-2 border-teal-700 hover:bg-teal-50",
        // Amber CTA — for use on teal/dark backgrounds
        commerce:  "bg-amber-400 text-gray-900 font-bold hover:bg-amber-300 shadow-sm",
        // Ghost — text only
        ghost:     "bg-transparent text-teal-700 hover:bg-teal-50",
        // Outlined neutral — for light backgrounds
        outline:   "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
        // Semi-transparent — for use on dark/teal backgrounds
        dark:      "bg-white/15 text-white border border-white/30 hover:bg-white/25",
        // White fill — for use on dark/teal backgrounds
        white:     "bg-white text-teal-800 font-bold hover:bg-teal-50 shadow-sm",
      },
      size: {
        sm:  "h-8  px-4  text-sm",
        md:  "h-10 px-5  text-sm",
        lg:  "h-12 px-7  text-base",
        xl:  "h-14 px-8  text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
