import React from "react";
import { LuListFilter } from "react-icons/lu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FilterPopover from "./FilterPopover";

export default function Filter() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="px-2 py-2 bg-green rounded-full flex items-center justify-center hover:opacity-95">
          <button>
            <LuListFilter color="#fff" className="h-6 w-6" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <FilterPopover />
      </PopoverContent>
    </Popover>
  );
}
