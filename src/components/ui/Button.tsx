import { ComponentPropsWithoutRef } from "react";
import cn from "@/lib/class-merge";
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "text-white px-3 py-2 rounded cursor-pointer font-medium text-sm md:text-base hover:bg-blue-500 transition-colors duration-300 ease-in-out",
        variant === "primary" ? "bg-blue-600" : "bg-gray-300",
        variant === "secondary" &&
          "text-blue-700 bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
