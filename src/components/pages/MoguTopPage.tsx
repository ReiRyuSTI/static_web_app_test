import React, { useEffect, useState } from "react";

import { AnimationPage } from "components/base/AnimationOage";
import { FooterComponent } from "components/base/FooterComponent";
import { HeaderComponent } from "components/base/HeaderComponent";
import { MiniButton } from "components/base/MiniButton";
import { MiniTitle } from "components/base/MiniTitle";
import { ShopCardComponent } from "components/base/ShopCardComponent";
import { shopDataIdol, shopDataRyu } from "provider/moguData";

export const MoguTopPage = () => {
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
              {shopDataRyu.map((value) => (
                <ShopCardComponent key={value.linkTabelog} shopInfo={value} />
              ))}
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
              {shopDataIdol.map((value) => (
                <ShopCardComponent key={value.linkTabelog} shopInfo={value} />
              ))}
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
