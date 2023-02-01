import React from "react";

import logoImage from "images/logoImage.svg";

export const AnimationPage = () => {
  return (
    <section className="absolute top-0 left-0 z-50 flex h-screen w-screen animate-flip-out-hor-top flex-col items-center justify-center gap-10 bg-[#FFFBF2]">
      <span className="font-syuku text-4xl md:text-6xl">お酒はおいしい。</span>
      <img
        src={logoImage}
        alt=""
        className="h-auto w-full max-w-sm object-contain md:w-[520px]"
      />
      <span className="font-syuku text-4xl md:text-6xl">金曜はうれしい。</span>
    </section>
  );
};
