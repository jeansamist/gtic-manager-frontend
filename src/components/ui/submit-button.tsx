import { ComponentProps, FunctionComponent } from "react";
import { UseFormReturn } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Button } from "./button";

export type SubmitButtonProps = ComponentProps<typeof Button> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
};

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  formReturn,
  children,
  ...props
}) => {
  return (
    <Button
      type="submit"
      {...formReturn.register("submit")}
      disabled={
        !formReturn.formState.isValid || formReturn.formState.isSubmitting
      }
      {...props}
    >
      {formReturn.formState.isSubmitting ? (
        <ScaleLoader
          aria-label="Loading Spinner"
          width={2}
          height={20}
          data-testid="loader"
          color="#ffffff"
        />
      ) : (
        children
      )}
    </Button>
  );
};
