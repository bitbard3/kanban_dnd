import React from "react";

export type DialogInputProps = {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DialogInputFull({
  label,
  placeholder,
  onChange,
}: DialogInputProps) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-start w-[80%]">
        <label className="text-neutral-600 font-medium pl-1">{label}</label>
      </div>
      <input
        required
        type="text"
        onChange={onChange}
        className="w-[80%]  text-sm focus:outline-green placeholder:text-sm bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
        placeholder={placeholder}
      />
    </div>
  );
}
