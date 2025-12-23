"use client";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function Calendar() {
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // days _null i= index
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="px-3 py-2 ">
      {/* current  */}
      <div className="flex justify-between items-center pb-5 pt-1.5 bg-[]">
        <h1>Thursday, 20th November</h1>
        <ChevronDown />
      </div>
      {/* header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">November 2025</h2>

        <div className="flex gap-2">
          <button className="p-1 hover:bg-[#ffffff22] rounded-lg">▲</button>
          <button className="p-1 hover:bg-[#ffffff22] rounded-lg">▼</button>
        </div>
      </div>

      {/* week days */}
      <div className="grid grid-cols-7 text-center text-gray-300 mb-2">
        {weekDays.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>

      {/* days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((num, i) => (
          <div
            key={i}
            className={`
              w-10 h-10 flex items-center justify-center 
              rounded-lg cursor-pointer hover:bg-[#ffffff22]
              text-white ${num === 20 ? "bg-blue-500 hover:bg-blue-500" : ""}
            `}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
