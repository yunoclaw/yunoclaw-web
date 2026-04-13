import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "amber" | "success" | "error" | "neutral" | "dark";
  className?: string;
}

export function Badge({ children, variant = "teal", className }: BadgeProps) {
  const variants = {
    teal:    "bg-teal-700/10 text-teal-700 border border-teal-700/20",
    amber:   "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    success: "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20",
    error:   "bg-red-500/10 text-red-700 border border-red-500/20",
    neutral: "bg-sand-200 text-gray-600 border border-sand-300",
    dark:    "bg-white/10 text-white border border-white/20",
  };
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
