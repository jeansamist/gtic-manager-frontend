import { cn } from "@/lib/utils";
import {
  Danger,
  IconProps,
  Notification as NotificationIcon,
  TickCircle,
} from "iconsax-react";
import { FunctionComponent, ReactNode } from "react";

export type NotificationProps = {
  type?: "success" | "danger" | "warning";
  title: ReactNode;
  icon?: FunctionComponent<IconProps>;
  state?: "valid" | "success" | "danger" | "warning";
} & React.HTMLAttributes<HTMLDivElement>;

export const Notification: FunctionComponent<NotificationProps> = ({
  title,
  icon: Icon,
  children,
  className,
  state = "valid",
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-4 text-white rounded-md border flex flex-col gap-2 relative",
        state === "valid"
          ? "bg-primary"
          : state === "success"
          ? "bg-green"
          : state === "danger"
          ? "bg-red"
          : "bg-yellow",
        className
      )}
      {...props}
    >
      <div className={cn("flex items-center gap-2")}>
        {Icon ? (
          <Icon variant="Bold" />
        ) : state === "valid" ? (
          <NotificationIcon variant="Bold" />
        ) : state === "success" ? (
          <TickCircle variant="Bold" />
        ) : state === "danger" ? (
          <Danger variant="Bold" />
        ) : state === "warning" ? (
          <Danger variant="Bold" />
        ) : null}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="text-[10px]">{children}</div>
    </div>
  );
};
