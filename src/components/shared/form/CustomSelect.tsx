import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

type CustomSelectProps = {
  fieldName: string;
  label?: string;
  placeholder?: string;
  className?: string;
  items: string[];
  disabled?: boolean;
};

const CustomSelect = ({
  fieldName,
  label,
  placeholder,
  className,
  items,
  disabled,
}: CustomSelectProps) => {
  const form = useFormContext();
  const { isSubmitting } = form.formState;
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field, fieldState }) => (
        <FormItem>
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
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={isSubmitting || disabled}
          >
            <FormControl>
              <SelectTrigger
                className={cn(
                  "flex h-10 font-normal w-full text-sm rounded-full border !border-[#E8E8E8]  px-3 py-2  file:border-0  file:text-sm file:font-medium file:text-foreground focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0",
                  className,
                  !field.value &&
                    "text-gray-600/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((value) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="cursor-pointer capitalize text-black"
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="px-4" />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
