import { PriorityLevel } from "./priority";
import { Status } from "./status";

export interface Task {
  id?: string;
  title: string;
  description: string;
  assignee: string;
  team: string;
  priority: PriorityLevel;
  status: Status;
  startDate: Date;
  endDate?: Date;
}
