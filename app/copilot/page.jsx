"use client";

import {
  ChevronDown,
  CircleAlert,
  Ellipsis,
  Glasses,
  House,
  Mic,
  Paperclip,
  Plus,
  Star,
} from "lucide-react";
import React, { useRef } from "react";

const Page = () => {
  const ref = useRef(null);

  const handleinput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div className="text-white relative h-full">
      <img
        src="images/nature.jpg"
        alt=""
        className="w-full h-screen object-cover"
      />

      {/* absolute bar */}
      <div className="absolute top-0 left-0 right-0 px-3">
        {/* Heading Top */}
        <div className="flex items-center py-3">
          <div className="flex items-center gap-2.5 hover:bg-[#707070] px-3 py-1 rounded">
            <img src="images/copilot.png" alt="" width={20} />
            <h1>copilot</h1>
          </div>

          <div className="flex items-center">
            <House size={28} className="hover:bg-[#707070] p-1 rounded" />
            <ChevronDown size={28} className="hover:bg-[#707070] p-1 rounded" />
          </div>
        </div>

        {/* Heading Centered */}
        <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl font-extrabold py-14 w-fit mx-auto">
          <h1>Good morning, Amit</h1>
          <h1>What can I help you with today</h1>
        </div>
        {/* search bar */}
        <div
          className=" bg-black rounded-2xl py-2 px-2 mx-auto w-2/3  "
          onClick={handleinput}
        >
          <div className=" cursor-text rounded-2xl    bg-gray-800 ">
            <input
              ref={ref}
              type="text"
              placeholder="Ask anything..."
              className="outline-none w-full rounded-2xl bg-transparent py-2 px-2"
            />
            {/* input bottom bar */}
            <div className="flex items-center justify-between px-3 py-2">
              {/* bottom left side icons */}
              <div className="flex items-center gap-3 ">
                <img src="images/copilot.png" alt="" className="w-6 h-6" />
                <button className="border border-gray-600 rounded-2xl  hover:bg-gray-600 px-3 py-1">
                  <h1 className="flex items-center">
                    Smart(GPT-5) <ChevronDown size={10} />
                  </h1>
                </button>
              </div>

              {/* bottom icons right side */}
              <div className="flex items-center gap-4">
                <Plus size={20} />
                <Glasses size={20} />
                <Mic size={20} />
              </div>
            </div>
          </div>
        </div>
        {/*  bottom bar */}
        <div className="flex items-center gap-3 py-7 mx-auto justify-center">
          <button className="rounded-2xl hover:bg-gray-800 bg-gray-700 px-3 py-1">
            <h1>Write a first draft</h1>
          </button>
          <button className="rounded-2xl hover:bg-gray-800 bg-gray-700 px-3 py-1">
            <h1>Get advice</h1>
          </button>
          <button className="rounded-2xl hover:bg-gray-800 bg-gray-700 px-3 py-1">
            <h1>Learn something new</h1>
          </button>
          <button className="rounded-2xl hover:bg-gray-800 bg-gray-700 px-3 py-1">
            <h1>Create an image</h1>
          </button>
          <button className="rounded-2xl hover:bg-gray-800 bg-gray-700 px-3 py-1">
            <h1>Make a plan</h1>
          </button>
        </div>
        {/* side bottom bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div className="bg-gray-700/60 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <Paperclip size={20} />
                <h1 className="font-semibold">Jump back to your file</h1>
              </div>
              <CircleAlert size={18} />
            </div>

            {/* 1st image section */}
            <div className="flex items-center justify-between py-2 hover:bg-white/10 transition rounded-lg px-2">
              <div className="flex items-center gap-3">
                <img
                  src="images/sky1.jpg"
                  alt=""
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-sm font-medium">
                    Jm-lova-Mn6WchNoQ-10-unspl..
                  </h1>
                  <h1 className="text-xs opacity-70">1h ago</h1>
                </div>
              </div>
              <Ellipsis size={18} />
            </div>

            {/* 2nd image section */}
            <div className="flex items-center justify-between py-2 hover:bg-white/10 transition rounded-lg px-2">
              <div className="flex items-center gap-3">
                <img
                  src="images/cloudy.png"
                  alt=""
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-sm font-medium">Cloudy.png</h1>
                  <h1 className="text-xs opacity-70">3h ago</h1>
                </div>
              </div>
              <Ellipsis size={18} />
            </div>

            {/* 3rd image section */}
            <div className="flex items-center justify-between py-2 hover:bg-white/10 transition rounded-lg px-2">
              <div className="flex items-center gap-3">
                <img
                  src="images/clouds.png"
                  alt=""
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-sm font-medium">Clouds.png</h1>
                  <h1 className="text-xs opacity-70">3h ago</h1>
                </div>
              </div>
              <Ellipsis size={18} />
            </div>
          </div>

          {/* 2nd side bottom bar */}
          <div className="bg-gray-700/60 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <Glasses size={20} />
                <h1 className="font-semibold">Get Guided with your apps</h1>
              </div>
              <CircleAlert size={18} />
            </div>

            {/* 1st image section */}
            <div className="grid grid-cols-3 gap-5 items-center py-4">
              <img
                src="images/chrome.png"
                alt=""
                className="w-10 h-10 hover:scale-110 transition"
              />
              <img
                src="images/vscode.png"
                alt=""
                className="w-10 h-10 hover:scale-110 transition"
              />
              <img
                src="images/file.png"
                alt=""
                className="w-10 h-10 hover:scale-110 transition"
              />
            </div>

            {/* 2nd image section */}
            <div className="grid grid-cols-3 gap-5 items-center pb-5">
              <img
                src="images/notes.png"
                alt=""
                className="w-10 h-10 hover:scale-110 transition"
              />
              <img
                src="images/terminal.png"
                alt=""
                className="w-10 h-10 hover:scale-110 transition"
              />
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Page;
