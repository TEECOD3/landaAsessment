/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const inputVariants = cva(
  "mx-auto p-3 capitalize  bg-white border-[1px] border-gray rounded-md inline-flex focus:border-2 focus:border-gray outline-none w-[100%]",
  {
    variants: {
      variant: {
        default: "text-black border-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  inputs?: {};
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputs, className, variant } = props;
  return (
    <input
      ref={ref}
      autoComplete="off"
      {...inputs}
      className={cn(inputVariants({ className, variant }))}
    />
  );
});

export default Input;
