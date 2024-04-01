import { Task } from "@/interface/task";
import { atom } from "recoil";

export const taskAtom = atom({
  key: "taskAtom",
  default: [] as Task[],
});
