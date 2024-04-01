import React, { useRef } from "react";
import Dnd from "./Dnd";
import Edit from "./Edit";
import Title from "./Title";
import Desc from "./Desc";
import Footer from "./Footer";
import Priority from "./Priority";
import { PriorityLevel } from "@/interface/priority";
import { Status } from "@/interface/status";

export type TaskProps = {
  id: string;
  title: string;
  description: string;
  priority: PriorityLevel;
  date: Date | undefined;
  assignee: string;
  status: Status;
};

export default function Task({
  title,
  description,
  priority,
  date,
  assignee,
  id,
  status,
}: TaskProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    if (divRef.current) {
      e.dataTransfer.setData("id", id);
      e.dataTransfer.setDragImage(divRef.current, 0, 0);
    }
  };

  return (
    <div
      ref={divRef}
      className="w-[90%] border-black border mt-5 bg-[#fff2ba] flex flex-col px-3 rounded-lg py-5"
      draggable={false}
    >
      <div className="flex items-center">
        <Priority priority={priority} />
        <div className="flex items-center space-x-1 ml-auto mr-1">
          <Dnd onDragStart={handleDragStart} />
          <Edit />
        </div>
      </div>
      <Title title={title} />
      <Desc description={description} />
      <Footer date={date} assignee={assignee} />
    </div>
  );
}
