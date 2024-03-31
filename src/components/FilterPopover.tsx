import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRecoilState } from "recoil";
import { priorityFilter } from "@/stores/atoms/filter";
import { VscChromeClose } from "react-icons/vsc";

export default function FilterPopover() {
  const [priorityFilterOption, setPriorityFilter] =
    useRecoilState(priorityFilter);

  return (
    <div>
      <div className="flex flex-col">
        <p className="text-black font-medium text-lg">Filter</p>
        <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-stone-950">Priority</p>
            {priorityFilterOption && (
              <button onClick={() => setPriorityFilter(null)}>
                <VscChromeClose className="h-5 w-5 text-neutral-800" />
              </button>
            )}
          </div>
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => setPriorityFilter("p0")}
              className={cn(
                "px-3 py-1 text-white rounded-full text-sm bg-red-400",
                priorityFilterOption == "p0" &&
                  "outline outline-red-500 outline-2 scale-110"
              )}
            >
              P0
            </button>
            <button
              onClick={() => setPriorityFilter("p1")}
              className={cn(
                "px-3 py-1 text-white rounded-full text-sm bg-amber-300",
                priorityFilterOption == "p1" &&
                  "outline outline-amber-400 outline-2 scale-110"
              )}
            >
              P1
            </button>
            <button
              onClick={() => setPriorityFilter("p2")}
              className={cn(
                "px-3 py-1 text-white rounded-full text-sm bg-green",
                priorityFilterOption == "p2" &&
                  "outline outline-lime-700 outline-2 scale-110"
              )}
            >
              P2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
