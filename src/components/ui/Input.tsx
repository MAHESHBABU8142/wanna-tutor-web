"use client";

import { ComponentPropsWithoutRef } from "react";
type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export default function Input({ label, required, ...props }: InputProps) {
  return (
    <label htmlFor={label} className="font-semibold ">
      <p>
        {label} {required && <span className="text-red-600 text-sm"> *</span>}
      </p>
      <input
        type="text"
        id={label}
        className="border placeholder:text-gray-400 font-normal border-gray-500 rounded-md p-2 mt-1 w-full focus:outline-none"
        required={required}
        {...props}
      />
    </label>
  );
}

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  optionsList?: { value: string; label: string }[];
};

function Select({ label, required, optionsList, ...props }: SelectProps) {
  return (
    <label htmlFor={label} className="font-semibold ">
      <p>
        {label} {required && <span className="text-red-600 text-sm"> *</span>}
      </p>
      <select
        id={label}
        required={true}
        className="border placeholder:text-gray-400 font-normal border-gray-400 mt-1 rounded-md p-2 w-full focus:outline-none"
        {...props}
      >
        {optionsList?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export { Select };
