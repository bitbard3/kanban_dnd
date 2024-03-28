import React from "react";
import { cn } from "@/lib/utils";

type KanbanBoxProps = {
  title: string;
  box: string;
};

export default function KanbanBox({ title, box }: KanbanBoxProps) {
  return (
    <>
      <div className="flex flex-col h-full w-[18%] space-y-5">
        <div className="flex items-center justify-center space-x-2">
          <div className={cn("h-6 w-6 rounded-full", box)}></div>
          <h3 className="text-black text-opacity-80 text-2xl font-semibold">
            {title}
          </h3>
        </div>
        <div className="h-[80%] kanban-box w-full rounded-[2rem] border-[1px] border-black bg-white"></div>
      </div>
    </>
  );
}
