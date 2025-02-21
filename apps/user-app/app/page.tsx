"use client";

import useBalance from "@repo/store/balance";
import Mydiv from "@repo/ui/mydiv";
import React, { useEffect } from "react";

function page() {
  const bal = useBalance();
  useEffect(() => {
    setInterval(() => {
      bal.deposit(500);
    }, 3000);
  }, []);
  return (
    <div className="w-24 h-24 bg-amber-300 w-screen h-screen ">
      <div className="flex w-screen gap-12">
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
      </div>
      <div className="w-48 h-12 bg-black text-white">{bal.balance}</div>
    </div>
  );
}

export default page;
