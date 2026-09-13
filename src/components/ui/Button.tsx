import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] disabled:pointer-events-none disabled:opacity-50 transition-smooth";
  
  const variants = {
    primary: "bg-[--color-espresso] text-[--color-secondary] hover:bg-[--color-primary]",
    secondary: "bg-[--color-secondary] text-[--color-espresso] border border-[--color-espresso]/20 hover:bg-[--color-beige]/50",
    ghost: "hover:bg-[--color-espresso]/5 text-[--color-espresso]"
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function buttonVariants({ variant = "primary", size = "md", className }: { variant?: "primary" | "secondary" | "ghost", size?: "sm" | "md" | "lg", className?: string } = {}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] disabled:pointer-events-none disabled:opacity-50 transition-smooth";
  const variants = {
    primary: "bg-[--color-espresso] text-[--color-secondary] hover:bg-[--color-primary]",
    secondary: "bg-[--color-secondary] text-[--color-espresso] border border-[--color-espresso]/20 hover:bg-[--color-beige]/50",
    ghost: "hover:bg-[--color-espresso]/5 text-[--color-espresso]"
  };
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };
  return cn(baseStyles, variants[variant], sizes[size], className);
}
