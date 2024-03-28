import React from "react";

type DescProps = {
  description: string;
};

export default function Desc({ description }: DescProps) {
  return <p className="text-neutral-600 text-[0.8rem] mt-2.5">{description}</p>;
}
