"use client";

import { InputHTMLAttributes } from "react";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: { label: string; value: string; placeholder?: boolean }[];
}

export const Select = ({ options, name, ...props }: Props) => {
  return (
    <div className="flex relative text-black">
      <select
        className="rounded-md outline-none appearance-none pl-8 pr-16 w-full h-16"
        name={name}
        defaultValue=""
        {...props}
      >
        {options.map((option, index) => (
          <option
            className="text-lg"
            key={index}
            value={option.value}
            disabled={option.placeholder}
            hidden={option.placeholder}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ArrowDown className="absolute text-lg top-6 right-4" />
    </div>
  );
};
