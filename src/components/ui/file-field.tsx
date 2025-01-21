import { cn } from "@/lib/utils";
import {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
  useState,
} from "react";

export type FileFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  children?: React.ReactNode;
  onChange?: (file: File) => void;
  extentions?: string | string[];
};

export const FileField: FunctionComponent<FileFieldProps> = ({
  children,
  extentions,
  onChange,
  className,
  ...props
}) => {
  const [_file, setFile] = useState<File | undefined>();
  const [error, setError] = useState<string | undefined>();
  const randomId = Math.random().toString(36).slice(2);
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(_file?.name);
    const file = e.target.files?.[0] as File;
    if (file.type && !extentions?.includes(file.type)) {
      setError("File type " + file.type + " not allowed");
      return;
    }
    if (error) setError(undefined);
    setFile(file);
    if (onChange) {
      onChange(file);
    }
  };
  return (
    <div className={cn("relative inline-block", className)}>
      <input
        type="file"
        className="hidden"
        id={randomId}
        onChange={_onChange}
        {...props}
      />
      <label htmlFor={randomId} className="block cursor-pointer">
        {children}
      </label>
      {error && (
        <p className="text-xs absolute right-0 -bottom-2 text-red">{error}</p>
      )}
    </div>
  );
};
