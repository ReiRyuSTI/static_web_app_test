import React from "react";

import { shopType } from "types/moguType";

type Props = {
  shopInfo: shopType;
};

export const ShopCardComponent = (props: Props) => {
  const { shopInfo } = props;

  return (
    <div className="flex h-auto w-full flex-col overflow-hidden rounded-md bg-gradient-to-tr from-[#FFE27D]/5 to-[#FFECA7] pb-4 shadow-md md:h-64 md:w-[550px] md:flex-row md:pb-0">
      <img
        src={shopInfo.imgLink}
        className="h-64 w-auto object-contain p-2 md:h-auto md:w-1/2"
        alt=""
      />
      <div className="flex w-full flex-col gap-4 px-2 pt-4 pb-2 md:w-1/2">
        <h3 className="text-2xl md:text-xl">{shopInfo.title}</h3>
        <ul className="flex flex-col gap-2 text-lg md:text-base">
          <li className="flex flex-row">
            <span className="inline-block w-20">ジャンル</span>
            <span className="inline-block w-6 text-center">:</span>
            <span className="inline-flex grow items-center justify-start">
              {shopInfo.genre}
            </span>
          </li>
          <li className="flex flex-row">
            <span className="inline-block w-20">喫煙</span>
            <span className="inline-block w-6 text-center">:</span>
            <span className="inline-flex grow items-center justify-start">
              {shopInfo.smoker}
            </span>
          </li>
          <li className="flex flex-row">
            <span className="inline-block w-20">呑み放題</span>
            <span className="inline-block w-6 text-center">:</span>
            <span className="inline-flex grow items-center justify-start">
              {shopInfo.openBar}
            </span>
          </li>
        </ul>
        <button
          className="flex w-full items-center justify-center rounded-lg border-4 border-white bg-[#FEA801] py-4 font-bold"
          onClick={() => window.open(shopInfo.linkTabelog)}
        >
          食べログ
        </button>
      </div>
    </div>
  );
};
