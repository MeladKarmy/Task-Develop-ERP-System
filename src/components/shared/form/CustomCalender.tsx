import { format } from "date-fns";
import { Calendar1Icon, ChevronDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

type CustomCalenderProps = {
  fieldName: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const CustomCalender = ({
  fieldName,
  label,
  placeholder,
  className,
}: CustomCalenderProps) => {
  const form = useFormContext();
  const { isSubmitting } = form.formState;

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel
              className={cn(
                "w-fit text-left text-sm capitalize text-secondary-900",
                isSubmitting && "opacity-50"
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

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    "flex h-10 w-full rounded-full hover:border-[#E8E8E8] border-[#E8E8E8]  bg-card p-4 px-3 py-2 text-sm text-neutral-800 outline-none ring-0 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 placeholder:text-secondary-400 hover:bg-card hover:text-secondary-900 focus:border-primary-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    !field.value && "text-gray-600/50",
                    className
                  )}
                  disabled={isSubmitting}
                >
                  <div className="flex items-center gap-1">
                    <Calendar1Icon name="calendar" className="w-5" />
                    {field.value ? (
                      <span className="truncate">
                        {format(field.value, "PPP")}
                      </span>
                    ) : (
                      <span className="truncate text-secondary-400">
                        {placeholder}
                      </span>
                    )}
                  </div>
                  <ChevronDown className="ms-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                // disabled={(date) =>
                //   date < new Date(new Date().setHours(0, 0, 0, 0))
                // }
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <FormMessage className="px-3" />
        </FormItem>
      )}
    />
  );
};

export default CustomCalender;
