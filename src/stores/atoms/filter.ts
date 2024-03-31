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

export const startDateFilter = atom<Date | undefined>({
  key: "startDateFilter",
  default: undefined,
});

export const endDateFilter = atom<Date | undefined>({
  key: "endDateFilter",
  default: undefined,
});
