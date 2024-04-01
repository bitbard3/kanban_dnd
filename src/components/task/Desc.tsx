import React from "react";
import { cn } from "@/lib/utils";
import { Status } from "@/interface/status";

type DescProps = {
  description: string;
  status: Status;
};

export default function Desc({ description, status }: DescProps) {
  return (
    <p
      className={cn(
        "text-neutral-600 text-[0.8rem] mt-2.5",
        status == "completed" && "line-through"
      )}
    >
      {description}
    </p>
  );
}
