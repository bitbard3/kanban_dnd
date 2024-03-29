import React from "react";

const priorityStyles = {
  p0: { bgColor: "bg-red-300", textColor: "text-red-600" },
  p1: { bgColor: "bg-amber-400", textColor: "text-amber-100" },
  p2: { bgColor: "bg-green", textColor: "text-lime-100" },
};

type PriorityProps = {
  priority: keyof typeof priorityStyles;
};

export default function Priority({ priority }: PriorityProps) {
  const { bgColor, textColor } = priorityStyles[priority];
  return (
    <div className={`px-3 py-0.5 ${bgColor} w-fit rounded-full`}>
      <p className={`text-xs ${textColor} capitalize`}>{priority}</p>
    </div>
  );
}
