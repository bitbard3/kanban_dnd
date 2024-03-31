import { PriorityLevel } from "@/interface/priority";
import { atom } from "recoil";

export const priorityFilter = atom<PriorityLevel | null>({
  key: "priorityFilter",
  default: null,
});

export const nameFilter = atom<string | null>({
  key: "nameFilter",
  default: null,
});

export const startDateFilter = atom<Date | null>({
  key: "startDateFilter",
  default: null,
});

export const endDateFilter = atom<Date | null>({
  key: "endDateFilter",
  default: null,
});
