import React from "react";
import { cn } from "@/lib/utils";
import Task from "./task/Task";
import TaskList from "./task/TaskList";
import { Status } from "@/interface/status";

type KanbanBoxProps = {
  title: string;
  box: string;
  status: Status;
};

export default function KanbanBox({ title, box, status }: KanbanBoxProps) {
  return (
    <>
      <div className="flex flex-col h-full w-[18%] space-y-5">
        <div className="flex items-center justify-center space-x-2">
          <div className={cn("h-6 w-6 rounded-full", box)}></div>
          <h3 className="text-black text-opacity-80 text-2xl font-semibold">
            {title}
          </h3>
        </div>
        <div className="h-[80%] pt-3 kanban-box w-full rounded-[2rem] border-[1px] border-black bg-white flex flex-col items-center overflow-scroll pb-8 no-scrollbar">
          <TaskList status={status} />
        </div>
      </div>
    </>
  );
}
