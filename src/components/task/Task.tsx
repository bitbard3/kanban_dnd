import React from "react";
import Dnd from "./Dnd";
import Edit from "./Edit";
import Title from "./Title";
import Desc from "./Desc";
import Footer from "./Footer";
import Priority from "./Priority";
import { PriorityLevel } from "@/interface/priority";

export type TaskProps = {
  title: string;
  description: string;
  priority: PriorityLevel;
  date: Date | undefined;
  assignee: string;
};

export default function Task({
  title,
  description,
  priority,
  date,
  assignee,
}: TaskProps) {
  return (
    <div className="w-[90%] border-black border bg-[#fff2ba] flex flex-col px-3 rounded-lg py-5">
      <div className="flex items-center">
        <Priority priority={priority} />
        <div className="flex items-center space-x-1 ml-auto mr-1">
          <Dnd />
          <Edit />
        </div>
      </div>
      <Title title={title} />
      <Desc description={description} />
      <Footer date={date} assignee={assignee} />
    </div>
  );
}
