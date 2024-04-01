import React, { useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DialogInputFull from "./Dialog/InputFull";
import DialogInputHalf from "./Dialog/InputHalf";
import { useRecoilState } from "recoil";
import { taskAtom } from "@/stores/atoms/task";
import { PriorityLevel } from "@/interface/priority";
import { Status } from "@/interface/status";
import { Task } from "@/interface/task";

type EditDialogProps = {
  id: string;
  handleDialogToggle: () => void;
};

export default function EditDialog({
  id,
  handleDialogToggle,
}: EditDialogProps) {
  const [tasks, setTaskAtom] = useRecoilState(taskAtom);
  const taskToEdit = tasks.find((task) => task.id == id);
  const [task, setTask] = useState({
    id: taskToEdit?.id,
    title: taskToEdit?.title,
    description: taskToEdit?.description,
    assignee: taskToEdit?.assignee,
    team: taskToEdit?.team,
    priority: taskToEdit?.priority,
    status: taskToEdit?.status,
    startDate: taskToEdit?.startDate,
  });

  const handleUpdateTask = () => {
    if (taskToEdit) {
      const updatedTasks = tasks.map((taskItem) => {
        if (taskItem.id === id) {
          return {
            ...taskItem,
            priority: task.priority,
            status: task.status,
          };
        }
        return taskItem;
      });
      setTaskAtom(updatedTasks as Task[]);
    }
    handleDialogToggle();
  };
  return (
    <DialogContent>
      <div className="flex flex-col">
        <p className="text-black text-xl font-medium">Update</p>
        <div className="mt-7 border border-black py-5 rounded-lg">
          <div className="flex flex-col w-full ">
            <DialogInputFull
              label="Title"
              placeholder="Go to gym!"
              disable={true}
              value={taskToEdit?.title}
            />
            <DialogInputFull
              label="Description"
              placeholder="Get ready at 6 and hit gym!"
              disable={true}
              value={taskToEdit?.description}
            />
            <div className="flex items-center mt-5 w-[80%] space-x-5 ml-auto mr-auto">
              <DialogInputHalf
                label="Assignee"
                placeholder="Ansh"
                disable={true}
                value={taskToEdit?.assignee}
              />
              <DialogInputHalf
                label="Team"
                placeholder="Avengers"
                disable={true}
                value={taskToEdit?.team}
              />
            </div>
            <div className="w-[80%] flex mr-auto ml-auto mt-8">
              <Select
                value={task.priority}
                onValueChange={(e: PriorityLevel) =>
                  setTask({ ...task, priority: e })
                }
              >
                <SelectTrigger className="w-[30%] bg-black text-white rounded-full focus:outline-none pl-4">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="p0">P0</SelectItem>
                    <SelectItem value="p1">P1</SelectItem>
                    <SelectItem value="p2">P2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select
                value={task.status}
                onValueChange={(e: Status) => setTask({ ...task, status: e })}
              >
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
              <button
                onClick={handleUpdateTask}
                className="w-full bg-green py-3 hover:opacity-95 rounded-full text-white"
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
