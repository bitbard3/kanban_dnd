import { Task } from "@/interface/task";
import { atom } from "recoil";

export const pending = atom({
  key: "pending",
  default: [] as Task[],
});

export const progress = atom({
  key: "progress",
  default: [] as Task[],
});

export const completed = atom({
  key: "completed",
  default: [] as Task[],
});

export const deployed = atom({
  key: "deployed",
  default: [] as Task[],
});
export const deferred = atom({
  key: "deferred",
  default: [] as Task[],
});
