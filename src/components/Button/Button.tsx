import { VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "../utils";

const buttonVariants = cva(
  "rounded-md transition-all duration-150",
  {
    variants: {
      theme: {
        primary: "text-white bg-black border border-black",
        secondary: "bg-white text-primary-500 border hover:border-black hover:text-black",
      },
      variant: {
        primary: "hover:bg-white hover:text-black hover:active:bg-primary-200",
        shadow: "hover:-translate-y-0.5 hover:active:translate-y-0",
        ghost: "text-primary-500 bg-transparent border-none hover:border hover:bg-primary-200 hover:active:bg-primary-300",
      },
      size: {
        sm: "p-1 px-3",
        md: "p-2 px-4",
        lg: "p-3 px-6"
      },
    },
    defaultVariants: {
      theme: "primary",
      variant: "primary",
      size: "md",
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
 
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, theme, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
 
export default Button;