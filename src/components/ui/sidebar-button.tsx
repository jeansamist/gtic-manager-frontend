import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Danger, IconProps, Notification } from "iconsax-react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
export type SidebarButtonProps = {
  type?: "alert" | "notification";
  label: string;
  icon: FunctionComponent<IconProps>;
  href: string;
  isActive?: boolean;
};
export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  type,
  label,
  icon: Icon,
  href,
  isActive,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "min-w-48 hover:bg-primary/15 transition-colors group",
        buttonVariants({
          variant: isActive ? "primary-secondary" : "white-muted",
        }),
        !isActive && "hover:text-title __shadow-none",
        isActive && "hover:bg-primary/15",
        "justify-between"
      )}
    >
      <div className="flex items-center gap-4">
        <Icon
          className="group-hover:text-primary"
          variant={isActive ? "Bold" : "Outline"}
        />
        <span>{label}</span>
      </div>
      {(type === "alert" && <Danger className="text-red" />) ||
        (type === "notification" && <Notification className="text-primary" />)}
    </Link>
  );
};
