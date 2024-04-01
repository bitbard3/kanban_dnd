import React from "react";
import { TbDragDrop } from "react-icons/tb";

type DndProps = {
  onDragStart: (event: React.DragEvent<HTMLButtonElement>) => void;
};

export default function Dnd({ onDragStart }: DndProps) {
  return (
    <button draggable onDragStart={onDragStart} className="cursor-grab">
      <TbDragDrop className=" text-neutral-900 h-5 w-5" />
    </button>
  );
}
