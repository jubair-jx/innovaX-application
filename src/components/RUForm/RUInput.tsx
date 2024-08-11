import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputField = {
  name: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const RUInput = ({
  type = "text",
  label,
  name,
  placeholder,
  required = true,
}: TInputField) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="flex flex-col">
            <label
              className="font-Raleway text-base mb-1 font-medium"
              htmlFor={label}
            >
              {label}
            </label>
            <Input
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent text-base"
              placeholder="Please enter your prompt...."
              {...field}
              // disabled={isLoading}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{error.message}</span>
            </p>
          )}
        </>
      )}
    />
  );
};

export default RUInput;
