import { FunctionComponent, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

export type FieldProps = React.ComponentProps<typeof Input> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
  label: ReactNode;
};

export const InputField: FunctionComponent<FieldProps> = ({
  formReturn,
  ...props
}) => {
  return (
    <FormField
      control={formReturn.control}
      name={props.name || ""}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
