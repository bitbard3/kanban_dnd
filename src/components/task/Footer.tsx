import React from "react";
import { LuCalendar } from "react-icons/lu";

type FooterProps = {
  assignee: string;
  date: Date | undefined;
};

export default function Footer({ assignee, date }: FooterProps) {
  return (
    <div className="flex w-full items-center mt-4">
      <p className="text-sm text-[#35227b] font-medium capitalize">
        @{assignee}
      </p>
      {date && (
        <div className="flex items-center  space-x-1.5 ml-auto mr-1.5">
          <LuCalendar className="text-black" />
          <p className="text-black text-opacity-60 font-medium text-xs">{}</p>
        </div>
      )}
    </div>
  );
}
