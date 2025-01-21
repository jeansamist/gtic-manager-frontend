"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-5 w-5 rounded-xs border border-border ring-offset-background __shadow overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity/15 data-[state=checked]:border-primary",
      className
    )}
    {...props}
  >
    <div className="absolute z-10 top-0 left-0 w-full h-full bg-foreground flex items-center justify-center">
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.825 5.00692V5.00829V11.9916C16.825 13.4089 16.4044 14.48 15.6881 15.1964C14.9717 15.9128 13.9005 16.3333 12.4833 16.3333H5.50829C4.09107 16.3333 3.02005 15.9128 2.30373 15.1956C1.58735 14.4783 1.16663 13.4051 1.16663 11.9833V5.00829C1.16663 3.59106 1.58714 2.51989 2.30351 1.80351C3.01989 1.08714 4.09106 0.666626 5.50829 0.666626H12.4916C13.9089 0.666626 14.9799 1.08718 15.6951 1.80329C16.4103 2.5193 16.8289 3.59001 16.825 5.00692ZM13.3368 6.93685L13.3369 6.9369L13.3428 6.9308C13.7686 6.49036 13.777 5.78658 13.3368 5.34641C12.8999 4.90948 12.1833 4.90948 11.7464 5.34641L7.81663 9.27619L6.25351 7.71307C5.81658 7.27614 5.1 7.27614 4.66307 7.71307C4.22614 8.15 4.22614 8.86658 4.66307 9.30351L7.02141 11.6618C7.23077 11.8712 7.51585 11.9916 7.81663 11.9916C8.11741 11.9916 8.40248 11.8712 8.61185 11.6618L13.3368 6.93685Z"
          fill="#888888"
          stroke="#888888"
        />
      </svg>
    </div>

    <CheckboxPrimitive.Indicator
      className={cn(
        "absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-primary"
      )}
    >
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.825 5.00692V5.00829V11.9916C16.825 13.4089 16.4044 14.48 15.6881 15.1964C14.9717 15.9128 13.9005 16.3333 12.4833 16.3333H5.50829C4.09107 16.3333 3.02005 15.9128 2.30373 15.1956C1.58735 14.4783 1.16663 13.4051 1.16663 11.9833V5.00829C1.16663 3.59106 1.58714 2.51989 2.30351 1.80351C3.01989 1.08714 4.09106 0.666626 5.50829 0.666626H12.4916C13.9089 0.666626 14.9799 1.08718 15.6951 1.80329C16.4103 2.5193 16.8289 3.59001 16.825 5.00692ZM13.3368 6.93685L13.3369 6.9369L13.3428 6.9308C13.7686 6.49036 13.777 5.78658 13.3368 5.34641C12.8999 4.90948 12.1833 4.90948 11.7464 5.34641L7.81663 9.27619L6.25351 7.71307C5.81658 7.27614 5.1 7.27614 4.66307 7.71307C4.22614 8.15 4.22614 8.86658 4.66307 9.30351L7.02141 11.6618C7.23077 11.8712 7.51585 11.9916 7.81663 11.9916C8.11741 11.9916 8.40248 11.8712 8.61185 11.6618L13.3368 6.93685Z"
          className="fill-primary"
        />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
