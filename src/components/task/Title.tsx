import { Status } from "@/interface/status";
import React from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  status: Status;
};

export default function Title({ title, status }: TitleProps) {
  return (
    <p
      className={cn(
        "text-dark font-medium text-lg mt-5",
        status == "completed" && "line-through"
      )}
    >
      {title}
    </p>
  );
}
