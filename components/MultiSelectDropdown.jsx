"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useController } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

export default function MultiSelectDropdown({
  name,
  label,
  options,
  control,
  error,
}) {
  const { field } = useController({
    name,
    control,
    defaultValue: [],
  });
  const [open, setOpen] = useState(false);

  const toggleValue = (value) => {
    const current = field.value || [];
    if (current.includes(value)) {
      field.onChange(current.filter((v) => v !== value));
    } else {
      field.onChange([...current, value]);
    }
  };

  return (
    <div className="mb-6">
      <Label className="mb-3 block text-white font-semibold text-sm tracking-wide">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-between bg-gray-700/50 border border-gray-600/50 rounded-xl text-white hover:bg-gray-700/70 hover:border-gray-500/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 px-4 py-3 h-auto min-h-[48px]",
              !field.value?.length && "text-gray-400",
              error && "border-red-500/50 focus:ring-red-500"
            )}
          >
            <span className="truncate">
              {field.value?.length
                ? field.value.length === 1
                  ? field.value[0]
                  : `${field.value.length} selected`
                : `Select ${label}`}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-400 transition-transform duration-200 ml-2 flex-shrink-0",
                open && "rotate-180"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl">
          <div className="p-2 space-y-1 max-h-64 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-150 cursor-pointer group"
                onClick={() => toggleValue(option)}
              >
                <div className="relative flex items-center justify-center">
                  <Checkbox
                    id={`${name}-${option}`}
                    checked={field.value?.includes(option)}
                    onCheckedChange={() => toggleValue(option)}
                    className="bg-gray-700/50 border-gray-600/50 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:text-white"
                  />
                  {field.value?.includes(option) && (
                    <Check className="w-3 h-3 text-white absolute pointer-events-none" />
                  )}
                </div>
                <Label
                  htmlFor={`${name}-${option}`}
                  className="text-white group-hover:text-blue-300 transition-colors duration-150 cursor-pointer flex-1"
                >
                  {option}
                </Label>
              </div>
            ))}
            {options.length === 0 && (
              <div className="p-4 text-center text-gray-400">
                No options available
              </div>
            )}
          </div>
          {field.value?.length > 0 && (
            <div className="border-t border-gray-700/50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {field.value.length} selected
                </span>
                <button
                  onClick={() => field.onChange([])}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-150 font-medium"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
      {error && (
        <p className="text-red-400 text-sm mt-2 flex items-center">
          <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
          {error.message}
        </p>
      )}
    </div>
  );
}
