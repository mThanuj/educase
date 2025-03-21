import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CustomRadioGroup = ({ required = false }: { required?: boolean }) => {
  return (
    <div className="w-full">
      <Label htmlFor="options" className="mb-2 text-xs">
        <span>
          Are you an Agency?
          {required ? (
            <span className="text-red-500 text-[0.7rem]">*</span>
          ) : (
            ""
          )}
        </span>
      </Label>
      <RadioGroup
        defaultValue="option-one"
        name="options"
        className="flex space-x-2 "
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">No</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default CustomRadioGroup;
