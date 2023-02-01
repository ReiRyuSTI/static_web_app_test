import React from "react";

type Props = {
  title: string;
};
export const MiniTitle = ({ title }: Props) => {
  return (
    <h2 className="relative pb-1 text-base before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:max-w-md before:bg-black md:text-2xl">
      {title}
    </h2>
  );
};
