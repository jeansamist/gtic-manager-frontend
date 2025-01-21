import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes, ReactElement } from "react";
import * as Fields from "./field";
type FieldsComponents = (typeof Fields)[keyof typeof Fields];
export type FieldGridProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactElement<FieldsComponents>[];
};

export const FieldGrid: FunctionComponent<FieldGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 w-full md:grid-cols-2 " + className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
