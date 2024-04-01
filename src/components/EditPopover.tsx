import React, { useState } from "react";
import { PopoverContent } from "./ui/popover";
import { useRecoilState } from "recoil";
import { taskAtom } from "@/stores/atoms/task";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EditDialog from "./EditDialog";
import { useToast } from "@/components/ui/use-toast";

export default function EditPopover({ id }: { id: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [task, setTask] = useRecoilState(taskAtom);
  const { toast } = useToast();
  const deleteHandler = () => {
    const taskToRemove = task.find((task) => task.id == id);
    if (taskToRemove?.status == "completed") {
      toast({
        variant: "destructive",
        description: "Completed tasks cannot be deleted!",
      });
      return;
    }
    setTask(task.filter((task) => task.id != id));
  };
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  return (
    <PopoverContent className="w-fit">
      <div className="flex flex-col ">
        <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
          <DialogTrigger>
            <div className="border-b-2 px-10 pb-3 ">Edit</div>
          </DialogTrigger>
          <EditDialog handleDialogToggle={handleDialogToggle} id={id} />
        </Dialog>

        <button onClick={deleteHandler} className="px-10 pb-3  pt-5">
          Delete
        </button>
      </div>
    </PopoverContent>
  );
}
