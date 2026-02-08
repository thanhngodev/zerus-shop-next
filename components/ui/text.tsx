import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-shop_dark_green capitalize tracking-wide font-bold font-sans text-3xl mb-5", className)}>{children}</h2>
  );
};

export { Title };
