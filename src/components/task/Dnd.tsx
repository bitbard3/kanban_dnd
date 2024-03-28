import React from "react";
import { TbDragDrop } from "react-icons/tb";

export default function Dnd() {
  return (
    <button className="cursor-grab">
      <TbDragDrop className=" text-neutral-900 h-5 w-5" />
    </button>
  );
}
