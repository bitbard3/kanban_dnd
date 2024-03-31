import { Status } from "@/interface/status";
import React from "react";
import Task, { TaskProps } from "./Task";
import { useRecoilValue } from "recoil";
import {
  completed,
  deferred,
  deployed,
  pending,
  progress,
} from "@/stores/atoms/task";
import { nameFilter, priorityFilter } from "@/stores/atoms/filter";

type TaskListProps = {
  status: Status;
};

export default function TaskList({ status }: TaskListProps) {
  const tasksByStatus = {
    pending: useRecoilValue(pending),
    progress: useRecoilValue(progress),
    completed: useRecoilValue(completed),
    deployed: useRecoilValue(deployed),
    deferred: useRecoilValue(deferred),
  };
  const tasks = tasksByStatus[status];
  const priorityFilterOption = useRecoilValue(priorityFilter);
  const nameFilterOption = useRecoilValue(nameFilter);
  let filteredTasks = tasks;
  if (priorityFilterOption) {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === priorityFilterOption
    );
  }

  return (
    <>
      {filteredTasks.map((task) => (
        <Task
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
