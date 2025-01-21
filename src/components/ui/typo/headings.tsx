import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";

export type H1Props = React.HTMLAttributes<HTMLDivElement>;

export const H1: FunctionComponent<H1Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1 className={cn("text-3xl font-extrabold", className)} {...props}>
      {children}
    </h1>
  );
};
