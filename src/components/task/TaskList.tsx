import { Status } from "@/interface/status";
import React from "react";
import Task, { TaskProps } from "./Task";
import { useRecoilValue } from "recoil";
import { taskAtom } from "@/stores/atoms/task";
import {
  endDateFilter,
  nameFilter,
  priorityFilter,
  startDateFilter,
} from "@/stores/atoms/filter";

type TaskListProps = {
  status: Status;
};

export default function TaskList({ status }: TaskListProps) {
  const tasks = useRecoilValue(taskAtom);
  const priorityFilterOption = useRecoilValue(priorityFilter);
  const nameFilterOption = useRecoilValue(nameFilter);
  const startDate = useRecoilValue(startDateFilter);
  const endDate = useRecoilValue(endDateFilter);
  let filteredTasks = tasks;
  filteredTasks = filteredTasks.filter((task) => task.status === status);

  // Filter tasks by priority if priority is provided
  if (priorityFilterOption) {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === priorityFilterOption
    );
  }

  // Filter tasks by name if assignee is provided
  if (nameFilterOption) {
    filteredTasks = filteredTasks.filter((task) =>
      task.assignee.toLowerCase().includes(nameFilterOption.toLowerCase())
    );
  }

  // Filter tasks by start date if only startDate is provided
  if (startDate) {
    filteredTasks = filteredTasks.filter((task) => {
      const taskStartDate = new Date(task.startDate);
      return taskStartDate >= startDate;
    });
  }

  // Filter tasks by start date if both startDate and endDate are provided
  if (startDate && endDate) {
    endDate.setHours(23, 59, 59, 999);
    filteredTasks = filteredTasks.filter((task) => {
      const taskStartDate = new Date(task.startDate);
      return taskStartDate >= startDate && taskStartDate <= endDate;
    });
  }

  return (
    <>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          status={task.status}
          id={task.id}
          title={task.title}
          description={task.description}
          priority={task.priority}
          date={task.endDate}
          assignee={task.assignee}
        />
      ))}
    </>
  );
}
