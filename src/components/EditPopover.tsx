import React from "react";
import { PopoverContent } from "./ui/popover";
import { useRecoilState } from "recoil";
import { taskAtom } from "@/stores/atoms/task";

export default function EditPopover({ id }: { id: string }) {
  const [task, setTask] = useRecoilState(taskAtom);
  const deleteHandler = () => {
    const taskToRemove = task.find((task) => task.id == id);
    if (taskToRemove?.status == "completed") {
      return;
    }
    setTask(task.filter((task) => task.id != id));
  };
  return (
    <PopoverContent className="w-fit">
      <div className="flex flex-col ">
        <button className="border-b-2 px-10 pb-3 ">Edit</button>
        <button onClick={deleteHandler} className="px-10 pb-3  pt-5">
          Delete
        </button>
      </div>
    </PopoverContent>
  );
}
