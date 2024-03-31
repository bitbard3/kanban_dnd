import Add from "@/components/Add";
import Filter from "@/components/Filter";
import KanbanBox from "@/components/KanbanBox";
import React from "react";

export default function Kanban() {
  return (
    <div>
      <div className="bg-yellow h-screen min-w-fit">
        <div className="flex flex-col h-full w-screen">
          <div className="h-[20%] w-full border-b-2 md:px-10 px-5 border-b-[#43434376]">
            <div className="flex flex-col h-full w-full">
              <div className="h-[40%]"></div>
              <div className="h-[60%] flex items-center justify-end md:space-x-10 space-x-5">
                <Filter />
                <Add />
              </div>
            </div>
          </div>
          <div className="min-h-[80%] max-h-[80%] mt-10 w-full overflow-x-scroll  flex xl:justify-evenly">
            <KanbanBox status="pending" title="Pending" box="bg-neutral-400" />
            <KanbanBox
              status="progress"
              title="In Progress"
              box="bg-amber-400"
            />
            <KanbanBox status="completed" title="Completed" box="bg-green" />
            <KanbanBox status="deployed" title="Deployed" box="bg-[#5E418A]" />
            <KanbanBox status="deferred" title="Deferred" box="bg-[#d21f34]" />
          </div>
        </div>
      </div>
    </div>
  );
}
