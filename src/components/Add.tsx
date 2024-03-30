import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogBody from "./DialogBody";

export default function Add() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="text-white bg-green rounded-lg hover:opacity-95 px-10 py-1.5 text-lg">
          Add Task
        </div>
      </DialogTrigger>
      <DialogBody />
    </Dialog>
  );
}
