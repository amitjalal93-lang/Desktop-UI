import React from "react";
import Sleft from "../fetures/Sleft.js";
import Scenter from "../fetures/Scenter.js";
import Sright from "../fetures/Sright.js";
export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1f2a14] text-white flex justify-between h-[7vh] pt-1 pb-2 px-5 z-50">
      <Sleft />
      <Scenter />
      <Sright />
    </div>
  );
}
