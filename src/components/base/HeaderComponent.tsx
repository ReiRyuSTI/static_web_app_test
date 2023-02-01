import React from "react";

export const HeaderComponent = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3">
      <h1 className="font-syuku text-4xl md:text-6xl">お酒はおいしい。</h1>
      <h2 className="font-syuku text-2xl md:text-4xl">
        田町・三田周辺の飲食店情報
      </h2>
    </header>
  );
};
