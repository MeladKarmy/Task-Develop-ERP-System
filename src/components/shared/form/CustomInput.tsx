import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

type CustomInput = {
  fieldName: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

function CustomInput({
  fieldName,
  label = "",
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
}: CustomInput) {
  const form = useFormContext();
  const { isSubmitting } = form.formState;

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field, fieldState }) => (
        <FormItem className="group relative w-full">
          {label && (
            <FormLabel
              className={cn(
                "text-start text-sm capitalize text-secondary-900",
                (isSubmitting || disabled) && "opacity-50"
              )}
            >
              {label}
              <span
                className={cn(
                  "text-primary",
                  fieldState.error && "text-red-500"
                )}
              >
                *
              </span>
            </FormLabel>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              disabled={isSubmitting || disabled}
              className={className}
              onChange={(event) =>
                type === "number"
                  ? field.onChange(+event.target.value)
                  : field.onChange(event.target.value)
              }
            />
          </FormControl>

          <FormMessage className="px-4" />
        </FormItem>
      )}
    />
  );
}

export default CustomInput;
