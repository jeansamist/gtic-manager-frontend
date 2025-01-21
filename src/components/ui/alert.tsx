import { cn } from "@/lib/utils";
import { Danger, IconProps } from "iconsax-react";
import { FunctionComponent, ReactNode } from "react";

export type AlertProps = {
  type?: "success" | "danger" | "warning";
  title: ReactNode;
  icon?: FunctionComponent<IconProps>;
  state?: "valid" | "success" | "danger" | "warning";
} & React.HTMLAttributes<HTMLDivElement>;

export const Alert: FunctionComponent<AlertProps> = ({
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
        "p-6 bg-white rounded-md border border-border flex flex-col gap-4",
        state === "valid"
          ? "border-primary"
          : state === "success"
          ? "border-green"
          : state === "danger"
          ? "border-red"
          : "border-yellow",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-4 text-primary",
          state === "valid"
            ? "text-primary"
            : state === "success"
            ? "text-green"
            : state === "danger"
            ? "text-red"
            : "text-yellow"
        )}
      >
        {Icon ? (
          <Icon variant="Bold" />
        ) : state === "valid" ? (
          <Danger variant="Bold" />
        ) : state === "success" ? (
          <Danger variant="Bold" />
        ) : state === "danger" ? (
          <Danger variant="Bold" />
        ) : state === "warning" ? (
          <Danger variant="Bold" />
        ) : null}
        <span className="font-semibold text-2xl text-title">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};
