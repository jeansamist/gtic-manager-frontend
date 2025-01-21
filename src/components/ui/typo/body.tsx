import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

export type Body1Props = HTMLAttributes<HTMLDivElement>;

export const Body1: FunctionComponent<Body1Props> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};
