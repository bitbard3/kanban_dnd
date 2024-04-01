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
import DialogInputFull from "./InputFull";
import DialogInputHalf from "./InputHalf";
import { Task } from "@/interface/task";
import { PriorityLevel } from "@/interface/priority";
import { useRecoilState } from "recoil";
import { Status } from "@/interface/status";
import { v4 as uuidv4 } from "uuid";
import { taskAtom } from "@/stores/atoms/task";
import { useToast } from "@/components/ui/use-toast";

interface DialogBodyProps {
  handleDialogToggle: () => void;
}

export default function DialogBody({ handleDialogToggle }: DialogBodyProps) {
  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    title: "",
    description: "",
    assignee: "",
    team: "",
    priority: "p2",
    status: "pending",
    startDate: new Date(),
  });
  const { toast } = useToast();
  const [tasks, setTaskAtom] = useRecoilState(taskAtom);

  const handleCreateTask = () => {
    if (!task.title || !task.description || !task.assignee || !task.team) {
      toast({
        variant: "destructive",
        description: "Some feilds are empty!",
      });
      return;
    }
    setTaskAtom([...tasks, task]);
    toast({
      variant: "success",
      description: "Task Added!",
    });
    setTask({
      id: uuidv4(),
      title: "",
      description: "",
      assignee: "",
      team: "",
      priority: "p2",
      status: "pending",
      startDate: new Date(),
    });
    handleDialogToggle();
  };

  return (
    <DialogContent>
      <div className="flex flex-col">
        <p className="text-black text-xl font-medium">Add task</p>
        <div className="mt-7 border border-black pb-5 rounded-lg">
          <div className="flex flex-col w-full ">
            <DialogInputFull
              label="Title"
              placeholder="Go to gym!"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTask({ ...task, title: e.target.value })
              }
            />
            <DialogInputFull
              label="Description"
              placeholder="Get ready at 6 and hit gym!"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTask({ ...task, description: e.target.value })
              }
            />
            <div className="flex items-center mt-5 w-[80%] space-x-5 ml-auto mr-auto">
              <DialogInputHalf
                label="Assignee"
                placeholder="Ansh"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTask({ ...task, assignee: e.target.value.toLowerCase() })
                }
              />
              <DialogInputHalf
                label="Team"
                placeholder="Avengers"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTask({ ...task, team: e.target.value })
                }
              />
            </div>
            <div className="w-[80%] flex mr-auto ml-auto mt-8">
              <Select
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
                onClick={handleCreateTask}
                className="w-full bg-green py-3 hover:opacity-95 rounded-full text-white"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
