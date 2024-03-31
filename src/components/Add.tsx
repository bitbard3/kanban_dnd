import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogBody from "./Dialog/Body";

export default function Add() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
      <DialogTrigger>
        <div className="text-white bg-green rounded-lg hover:opacity-95 px-10 py-1.5 text-lg">
          Add Task
        </div>
      </DialogTrigger>
      <DialogBody handleDialogToggle={handleDialogToggle} />
    </Dialog>
  );
}
