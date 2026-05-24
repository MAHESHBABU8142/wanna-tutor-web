import cn from "@/lib/class-merge";
import { ElementType } from "react";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "primary" | "secondary";
};

export default function Text({
  variant = "primary",
  className,
  ...props
}: TextProps) {
  const Tag = TEXT_VARIANTS[variant].tag;
  return (
    <Tag
      className={cn(TEXT_VARIANTS[variant].className, className)}
      {...props}
    />
  );
}

const TEXT_VARIANTS: Record<
  "primary" | "secondary",
  { className: string; tag: ElementType }
> = {
  primary: {
    className: "text-3xl font-semibold text-gray-800 md:text-5xl",
    tag: "h2",
  },
  secondary: {
    className: "text-xl text-gray-700 md:text-xl",
    tag: "h3",
  },
};
