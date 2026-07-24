import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  external?: boolean;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  withArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-lg font-heading font-bold uppercase tracking-wide transition-all duration-300";

const VARIANTS = {
  primary: "bg-mp-gold text-mp-ink-deep hover:bg-mp-gold-deep",
  outline:
    "border-2 border-mp-gold text-mp-gold hover:bg-mp-gold hover:text-mp-ink-deep",
} as const;

const SIZES = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

export function Button({
  href,
  external = false,
  variant = "primary",
  size = "lg",
  withArrow = false,
  type = "button",
  disabled = false,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    BASE,
    VARIANTS[variant],
    SIZES[size],
    disabled && "pointer-events-none opacity-60",
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
