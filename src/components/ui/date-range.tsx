"use client";

import { endOfToday, format, startOfYesterday } from "date-fns";
import { Calendar as CalendarIcon } from "iconsax-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DatePickerWithRange({
  className,
  setFrom,
  setTo,
}: React.HTMLAttributes<HTMLDivElement> & {
  setFrom: React.Dispatch<React.SetStateAction<Date>>;
  setTo: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startOfYesterday(),
    to: endOfToday(),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"white-border-muted"}
            className={cn("gap-4 text-left font-normal", !date && "text-muted")}
          >
            <CalendarIcon className="text-foreground" />
            {date?.from ? (
              date.to ? (
                <>
                  From {format(date.from, "PPP")} to {format(date.to, "PPP")}
                </>
              ) : (
                format(date.from, "PPP")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            toDate={endOfToday()}
            onSelect={(range) => {
              setFrom(range?.from || new Date());
              setTo(range?.to || new Date());
              setDate(range);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
