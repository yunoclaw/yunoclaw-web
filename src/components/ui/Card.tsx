import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={cn(
      "rounded-lg border border-sand-300 bg-white shadow-sm",
      hover && "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>;
}
