import React from "react";
import { DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function DialogBody() {
  return (
    <DialogContent>
      <div className="flex flex-col">
        <p className="text-black text-xl font-medium">Add task</p>
        <div className="mt-7 border border-black py-5 rounded-lg">
          <div className="flex flex-col w-full ">
            <div className="flex flex-col w-full items-center">
              <div className="flex justify-start w-[80%]">
                <label className="text-neutral-600 font-medium pl-1">
                  Title
                </label>
              </div>
              <input
                type="text"
                className="w-[80%]  text-sm focus:outline-green placeholder:text-sm bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
                placeholder="Go to gym!"
              />
            </div>
            <div className="flex flex-col w-full items-center mt-5">
              <div className="flex justify-start w-[80%]">
                <label className="text-neutral-600  font-medium pl-1">
                  Description
                </label>
              </div>
              <input
                type="text"
                className="w-[80%] text-sm placeholder:text-sm focus:outline-green bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
                placeholder="Get ready at 6 and hit gym!"
              />
            </div>
            <div className="flex items-center mt-5 w-[80%] space-x-5 ml-auto mr-auto">
              <div className="flex flex-col items-center w-[50%] ">
                <div className="flex justify-start w-full">
                  <label className="text-neutral-600  font-medium pl-1">
                    Assignee
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full text-sm placeholder:text-sm focus:outline-green bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
                  placeholder="Ansh"
                />
              </div>
              <div className="flex flex-col items-center w-[50%] ">
                <div className="flex justify-start w-full">
                  <label className="text-neutral-600  font-medium pl-1">
                    Team
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full text-sm focus:outline-green placeholder:text-sm bg-black bg-opacity-95 rounded-full py-4 text-white mt-1 pl-4 placeholder:text-neutral-200"
                  placeholder="Avengers"
                />
              </div>
            </div>
            <div className="w-[80%] flex mr-auto ml-auto mt-8">
              <Select>
                <SelectTrigger className="w-[30%] bg-black text-white rounded-full focus:outline-none pl-4">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="p0">P1</SelectItem>
                    <SelectItem value="p1">P2</SelectItem>
                    <SelectItem value="p2">P3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[35%] bg-black text-white rounded-full focus:outline-none pl-4 ml-auto">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="deployed">Deployed</SelectItem>
                    <SelectItem value="deferred">Deferred</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[80%] mr-auto ml-auto mt-10">
              <button className="w-full bg-green py-3 hover:opacity-95 rounded-full text-white">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
