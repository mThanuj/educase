import React, { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface CustomInputLabelProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: Dispatch<SetStateAction<LoginFormType>>;
  required?: boolean;
}

const CustomInputLabel = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  required = false,
}: CustomInputLabelProps) => {
  return (
    <div className="mb-4 relative">
      <div className="absolute -top-2 left-2 bg-white text-[#8e5afd] pr-3 pl-1">
        <Label htmlFor="email" className="mr-6 text-xs">
          <span>
            {label}
            {required ? (
              <span className="text-red-500 text-[0.7rem]">*</span>
            ) : (
              ""
            )}
          </span>
        </Label>
      </div>
      <Input
        type={type}
        id={type.toLowerCase()}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange((value) => ({ ...value, [name]: e.target.value }))
        }
        className={`p-3 h-11 text-xs border-gray-200`}
        required={required}
      />
    </div>
  );
};

export default CustomInputLabel;
