import React, { useEffect, useState } from "react";

import { AnimationPage } from "components/base/AnimationOage";
import { FooterComponent } from "components/base/FooterComponent";
import { HeaderComponent } from "components/base/HeaderComponent";
import { MiniButton } from "components/base/MiniButton";
import { MiniTitle } from "components/base/MiniTitle";
import { ShopCardComponent } from "components/base/ShopCardComponent";
import { shopType } from "types/moguType";

export const MoguTopPage = () => {
  const data: shopType = {
    title: "今日はおいしいごはんとか",
    genre: "焼き鳥・海鮮",
    price: "1,000～2,000円",
    smoker: "屋内",
    openBar: "あり",
    linkTabelog: "https://tabelog.com/tokyo/A1314/A131402/13264409/",
  };
  const [tabViewFlag, setTabViewFlag] = useState<boolean>(true);
  const onClickTab = () => {
    setTabViewFlag(!tabViewFlag);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tabViewFlag]);
  return (
    <>
      <main className="relative flex h-auto flex-col items-center gap-20 bg-[#FFFBF2] pt-16">
        <AnimationPage />
        <HeaderComponent />
        <section className="relative flex w-full max-w-6xl flex-row flex-wrap gap-10 px-7 font-kosugi md:flex-col md:px-0 ">
          <div
            className={
              "w-full flex-col gap-2 transition-all overflow-hidden " +
              (tabViewFlag ? "flex md:flex" : "hidden md:flex")
            }
          >
            <MiniTitle title="龍ちゃんおススメ" />
            <div className="flex w-full flex-col flex-wrap gap-[52px] md:flex-row">
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
            </div>
          </div>
          <div
            className={
              "flex w-full flex-col gap-2 transition-all  overflow-hidden " +
              (!tabViewFlag ? "flex md:flex" : "hidden md:flex")
            }
          >
            <MiniTitle title="情報掲載（行ってみたいな～）" />
            <div className="flex w-full flex-col flex-wrap gap-[52px] md:flex-row">
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
              <ShopCardComponent shopInfo={data} />
            </div>
          </div>
        </section>
        <div className="sticky bottom-0 flex h-20 w-full items-center justify-around bg-[#FFFBF2]/90 md:hidden">
          <MiniButton
            text="おススメ"
            visibleFlag={tabViewFlag ? true : false}
            onClick={onClickTab}
          />
          <MiniButton
            text="情報掲載"
            visibleFlag={tabViewFlag ? false : true}
            onClick={onClickTab}
          />
        </div>
        <FooterComponent />
      </main>
    </>
  );
};
