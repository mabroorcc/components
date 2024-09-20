// components/button/button.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  size?: "sm" | "lg" | "default";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variantClass = variant ? `btn-${variant}` : "btn-primary";
    const sizeClass = size && size !== "default" ? `btn-${size}` : "";

    return (
      <button
        className={cn("btn", variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };