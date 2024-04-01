import React from "react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

import { HiMiniEllipsisVertical } from "react-icons/hi2";
import EditPopover from "../EditPopover";

export default function Edit({ id }: { id: string }) {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="">
          <HiMiniEllipsisVertical className=" text-neutral-900 h-5 w-5" />
        </div>
      </PopoverTrigger>
      <EditPopover id={id} />
    </Popover>
  );
}
