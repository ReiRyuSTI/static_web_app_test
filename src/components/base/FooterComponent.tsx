import React from "react";

export const FooterComponent = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-[#F5EFE2] py-10 md:py-20">
      <h1 className="font-syuku text-4xl md:text-6xl">金曜はうれしい</h1>
      <ul className="flex flex-col items-center gap-5 font-syuku text-2xl md:flex-row">
        <li
          className="hover:cursor-pointer"
          onClick={() => window.open("https://www.sios.com/ja/")}
        >
          申し訳ない程度の会社のリンク
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() =>
            window.open("https://tech-lab-engineer.sios.jp/archives/log/")
          }
        >
          私の遊び場
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.reina-ryu-f.xyz/photoAlb/#/all")
          }
        >
          写真集
        </li>
      </ul>
    </footer>
  );
};
