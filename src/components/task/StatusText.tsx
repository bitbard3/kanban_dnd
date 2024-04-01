import React from "react";

const StatusStyles = {
  pending: {
    bgColor: "bg-neutral-400",
    text: "Pending",
  },
  progress: {
    bgColor: "bg-amber-400",
    text: "In Progress",
  },
  completed: {
    bgColor: "bg-green",
    text: "Completed",
  },
  deployed: {
    bgColor: "bg-[#5E418A]",
    text: "Deployed",
  },

  deferred: {
    bgColor: "bg-[#d21f34]",

    text: "Deferred",
  },
};
type StatusProps = {
  status: keyof typeof StatusStyles;
};

export default function StatusText({ status }: StatusProps) {
  const { bgColor, text } = StatusStyles[status];
  return (
    <div className={`ml-2 px-3 py-0.5 ${bgColor} w-fit rounded-full`}>
      <p className={`text-xs text-white`}>{text}</p>
    </div>
  );
}
