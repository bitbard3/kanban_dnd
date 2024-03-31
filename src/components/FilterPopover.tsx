import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRecoilState } from "recoil";
import {
  endDateFilter,
  nameFilter,
  priorityFilter,
  startDateFilter,
} from "@/stores/atoms/filter";
import { VscChromeClose } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";

export default function FilterPopover() {
  const [startDate, setStartDate] = useRecoilState(startDateFilter);
  const [endDate, setEndDate] = useRecoilState(endDateFilter);
  const [priorityFilterOption, setPriorityFilter] =
    useRecoilState(priorityFilter);
  const [nameFilterOption, setNameFilter] = useRecoilState(nameFilter);
  const [asigneeFilter, setasigneeFilter] = useState<string | null>(null);
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
        <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
          <p className="text-stone-950">Assignee</p>
          <div className="w-2/3 rounded-md flex items-center border border-black">
            <input
              onChange={(e) => setasigneeFilter(e.target.value)}
              type="text"
              className="pl-2 w-[80%] focus:outline-none py-1.5 placeholder:text-neutral-500 placeholder:text-sm text-sm  rounded-md"
              placeholder="Ansh"
            />
            {nameFilterOption && (
              <button className="mr-1" onClick={() => setNameFilter(null)}>
                <VscChromeClose className="h-5 w-5 text-neutral-500" />
              </button>
            )}
            <button
              onClick={() => setNameFilter(asigneeFilter)}
              className="ml-auto flex px-2 py-1.5 text-sm border-l-2"
            >
              <IoIosSearch className="h-5 w-5 text-neutral-500" />
            </button>
          </div>
        </div>
        <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
          <p className="text-stone-950">From</p>
          <Popover>
            <PopoverTrigger asChild>
              <div
                className={cn(
                  "w-2/3 border flex items-center text-sm py-2 border-black rounded-md pl-2",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
          <p className="text-stone-950">To</p>
          <Popover>
            <PopoverTrigger asChild>
              <div
                className={cn(
                  "w-2/3 border flex items-center text-sm py-2 border-black rounded-md pl-2",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
