import React from "react";
import { DialogInputProps } from "./InputFull";

export default function DialogInputHalf({
  label,
  placeholder,
  onChange,
}: DialogInputProps) {
  return (
    <div className="flex flex-col items-center w-[50%] ">
      <div className="flex justify-start w-full">
        <label className="text-neutral-600  font-medium pl-1">{label}</label>
      </div>
      <input
        required
        type="text"
        className="w-full text-sm placeholder:text-sm focus:outline-green bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
