import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SocialMediaData = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com/",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com/",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <Facebook className="w-5 h-5" />,
  },
];

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex  items-center gap-3.5", className)}>
        {SocialMediaData.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-shop_light_green hover:border-shop_light_green hoverEffect",
                  iconClassName,
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName,
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
