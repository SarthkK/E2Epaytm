import Mydiv from "@repo/ui/mydiv";
import React from "react";

function page() {
  return (
    <div className="w-24 h-24 bg-amber-300 w-screen h-screen ">
      <div className="flex w-screen gap-12">
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
        <Mydiv></Mydiv>
      </div>
    </div>
  );
}

export default page;
