import React from "react";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <p className="text-dark font-medium text-lg mt-5">{title}</p>;
}
