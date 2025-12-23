import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Camera,
  EllipsisVertical,
  Folder,
  Grip,
  ListMusic,
  Mic,
  Plus,
  RotateCw,
  Search,
  SquareRoundCorner,
  Star,
} from "lucide-react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div
        className="
  flex items-center justify-between gap-3 
  text-white bg-[#454545] 
  pt-2 pb-1 mt-3 rounded-t-2xl
"
      >
        {/* Left Side Buttons */}
        <div className="flex items-center gap-1">
          <ArrowLeft
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
          />
          <ArrowRight
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
          />
          <RotateCw
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
          />
        </div>

        {/* Search Bar */}
        <div
          className="flex items-center bg-[#1d1d1d] px-2 py-1 rounded-full 
      w-full md:w-3/4 lg:w-1/2 mt-2 md:mt-0"
        >
          <FaGoogle
            size={34}
            className="text-white mr-3 hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
          />

          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="flex-1 outline-none text-white text-sm md:text-base"
          />

          <Star
            size={34}
            className="text-white ml-3 hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 w-full md:w-1/6 justify-end mt-2 md:mt-0">
          <div className="border-r border-gray-500 flex items-center pr-3">
            <SquareRoundCorner
              size={34}
              className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
            />
          </div>

          <ListMusic
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full flex flex-shrink-0"
          />

          <img
            src="images/profile.png"
            alt="profile"
            className="w-7 h-7 rounded-full"
          />

          <EllipsisVertical
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full flex-shrink-0"
          />
        </div>
      </div>

      {/* second section */}
      <div className="flex items-center justify-between px-3 border-b-2 border-gray-500   ">
        <Blocks
          size={34}
          className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full"
        />
        <div className="flex items-center gap-2 border-l-3  border-gray-500 my-2">
          <Folder
            size={34}
            className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full ml-2 "
          />
          <h1>All Bookmarks</h1>
        </div>
      </div>

      {/* third section */}
      <div className="flex items-center gap-3 float-end pr-4">
        <h1>Gmail</h1>
        <h1>Images</h1>
        <Grip size={34} className="hover:bg-[#4b4b4b] py-2 px-2 rounded-full" />
        <img src="images/profile.png" alt="" className="w-7" />
      </div>

      {/*  center heading page*/}
      <div className="flex flex-col items-center justify-center   mx-[10%] ">
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold py-10">
          Google
        </h1>

        {/* search bar */}
        <div className="flex items-center gap-3 bg-white px-2 rounded-full py-1.5 w-full min-w-[500px] md:w-3/4 lg:w-1/2">
          <Search size={24} className="cursor-pointer text-black" />

          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="flex-1 outline-none text-black text-sm md:text-base"
          />

          <div className="flex items-center gap-3 text-black">
            <Mic className="cursor-pointer text-black" size={24} />
            <Camera className="cursor-pointer text-black" size={24} />

            {/* AI Mode Button */}
            <div
              className="p-0.5 rounded-2xl bg-transparent 
        hover:bg-linear-to-r hover:from-pink-500 hover:via-red-500 hover:to-blue-500
        transition-all duration-300"
            >
              <button
                className="flex items-center bg-gray-200 px-3 py-1 gap-2 rounded-2xl 
            hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
              >
                <Search size={24} className="text-black" />
                <h1 className="text-sm md:text-base">AI Mode</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* add items */}
      <div className="flex flex-col items-center mt-7 hover:bg-[#4b4b4b] px-3 py-3 w-fit mx-auto">
        <Plus size={44} className="bg-[#089cff] py-2 px-2 rounded-full" />
        <h1 className="pt-3">Add Shortcut</h1>
      </div>
    </div>
  );
};

export default page;
