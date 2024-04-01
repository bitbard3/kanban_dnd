import React from "react";
import { cn } from "@/lib/utils";
import TaskList from "./task/TaskList";
import { Status } from "@/interface/status";
import { useRecoilState } from "recoil";
import { taskAtom } from "@/stores/atoms/task";
import { Task } from "@/interface/task";

type KanbanBoxProps = {
  title: string;
  box: string;
  status: Status;
};

export default function KanbanBox({ title, box, status }: KanbanBoxProps) {
  const [task, setTask] = useRecoilState(taskAtom);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const taskToMoveIndex = task.findIndex((taskItem) => taskItem.id === id);

    if (taskToMoveIndex !== -1) {
      const updatedTask = { ...task[taskToMoveIndex], status: status };
      const updatedTasks = [...task];
      updatedTasks[taskToMoveIndex] = updatedTask;
      setTask(updatedTasks);
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col h-full px-5 min-w-[100%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[18%] xl:px-0  space-y-5">
        <div className="flex items-center justify-center space-x-2">
          <div className={cn("h-6 w-6 rounded-full", box)}></div>
          <h3 className="text-black text-opacity-80 text-2xl font-semibold">
            {title}
          </h3>
        </div>
        <div
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
          className="h-[80%] pt-3 kanban-box w-full rounded-[2rem] border-[1px] border-black bg-white flex flex-col items-center overflow-scroll pb-8 no-scrollbar"
        >
          <TaskList status={status} />
        </div>
      </div>
    </>
  );
}
