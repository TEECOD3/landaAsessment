/* eslint-disable react/display-name */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex  items-center justify-center rounded-none transition-color focus:outline-none focus:ring-2  disabled:pointer-events-none disbaled:opacity-50",

  {
    variants: {
      variant: {
        default: "bg-blue-300  text-white  hover:bg-blue-600/20",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-6 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-3 md:h-13 md:px-6 text-sm  md:text-base xl:text-xl capitalize md:py-6 xl:py-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, size, variant, ...prop } = props;
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...prop}
    />
  );
});

export { Button, buttonVariants };
