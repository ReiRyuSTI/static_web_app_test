import React from "react";

type Props = {
  visibleFlag: boolean;
  text: string;
  onClick: () => void;
};

export const MiniButton = (props: Props) => {
  const { text, visibleFlag, onClick } = props;
  return (
    <>
      <button
        className={
          "w-1/3 bg-[#ffc95d] py-4 rounded-2xl border-4 border-white font-bold transition-all" +
          (visibleFlag ? " opacity-100 text-white" : " opacity-30 text-black")
        }
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
