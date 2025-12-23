import {
  ChevronDown,
  Eraser,
  Italic,
  Link2,
  Logs,
  Settings,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" ">
      <div className="flex justify-between items-center bg-[#4a4a4a] px-2  ">
        <div className="flex items-center gap-2 ">
          <h1 className="hover:bg-[#707070] px-3 py-1 rounded">File</h1>
          <h1 className="hover:bg-[#707070] px-3 py-1 rounded">Edit</h1>
          <h1 className="hover:bg-[#707070] px-3 py-1 rounded">View </h1>
        </div>
        {/* center */}
        <div className="flex items-center ">
          <h1 className="flex items-center  hover:bg-[#707070] px-2 py-1 rounded">
            H1
            <ChevronDown size={20} />
          </h1>
          <h1 className="flex items-center hover:bg-[#707070] px-2 py-1 rounded">
            <Logs size={20} />
            <ChevronDown size={20} />
          </h1>
          <h1 className="hover:bg-[#707070] px-3 py-1 rounded font-extrabold">
            B
          </h1>
          <h1 className="hover:bg-[#707070] px-3 py-1 rounded">
            <Italic size={20} />
          </h1>
          <button className="hover:bg-[#707070] px-3 py-1 rounded">
            <Link2 size={20} />
          </button>
          <button className="hover:bg-[#707070] px-3 py-1 rounded">
            <Eraser size={20} />
          </button>
        </div>
        {/* right */}
        <div className="flex items-center">
          <button className="flex items-center gap-1 hover:bg-[#707070] px-3 py-1 rounded">
            <img src="images/copilot.png" alt="" className="w-5" />
            <ChevronDown size={20} />
          </button>
          <button className="animate-pulse hover:scale-80 px-2">
            <img src="images/profile.png" alt="" className="w-7" />
          </button>
          <button className="hover:bg-[#707070] px-3 py-1 rounded">
            <Settings size={20} />
          </button>
        </div>
      </div>
      {/* text */}
      <h1 className="pt-2 px-4 font-space-mono font-normal">
        Hey guys welcome to my notes please write your tasks...
      </h1>
      {/* text area */}

      <i>
        <textarea className="real-dark-scroll w-full h-[59vh]  px-4 outline-none resize-none overflow-y-auto font-space-mono font-normal bg-transparent"></textarea>
      </i>
    </div>
  );
};

export default page;
