import {
  Airplay,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  Book,
  BookA,
  BookImage,
  ChevronDown,
  ChevronRight,
  CirclePlus,
  Clipboard,
  Cloud,
  Cloudy,
  Computer,
  Copy,
  Ellipsis,
  FolderClosed,
  Forward,
  House,
  Image,
  ListChevronsDownUp,
  Menu,
  Monitor,
  Music,
  Pin,
  RotateCw,
  Scissors,
  Search,
  Trash,
  Tv,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      {/*  top 1st Content */}
      <div className="flex py-1.5 gap-3 w-full bg-[#262626] border-b border-[#2b2b2b] items-center px-3">
        {/* icons relod etc */}
        <div className="flex items-center gap-4 pr-3">
          <ArrowLeft size={25} className="hover:bg-[#707070] p-1 rounded" />
          <ArrowRight size={25} className="hover:bg-[#707070] p-1 rounded" />
          <ArrowUp size={25} className="hover:bg-[#707070] p-1 rounded" />
          <RotateCw size={25} className="hover:bg-[#707070] p-1 rounded" />
        </div>

        <div className="flex items-center w-full gap-2">
          {/* center part */}
          <div className="flex items-center bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white gap-2 px-3 py-1 rounded-md grow">
            <div className="hover:bg-[#707070] px-2 py-1 text-xs rounded flex items-center gap-3">
              <Cloud size={17} />
              <h1>File Explorer</h1>
            </div>
            <ChevronRight size={17} />
            <h1 className="hover:bg-[#707070] px-2 py-1 text-xs rounded">
              Amit-Personal
            </h1>
            <ChevronRight size={17} />
          </div>

          {/* search bar*/}
          <div className="flex items-center bg-[#1e1e1e] text-xs hover:bg-[#2a2a2a] border border-[#2b2b2b] rounded-md px-2 py-1 w-60 flex-none">
            <input
              type="text"
              placeholder="Amit-Personal"
              className="outline-none  text-white text-xs md:text-base bg-transparent w-full"
            />
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* top 2nd Content */}
      <div className="flex items-center bg-[#1e1e1e] border-b border-[#2b2b2b] py-1 px-2 ">
        {/* left part */}
        <div className="border-r-2 border-[#2b2b2b] pr-2.5">
          <div className="flex items-center hover:bg-[#2a2a2a] text-white gap-2 px-3 py-1 rounded-md ">
            <CirclePlus size={17} />
            <h1>New</h1>
            <ChevronDown size={12} />
          </div>
        </div>
        {/* middle part */}
        <div className="border-r-2 border-[#2b2b2b] pr-2.5">
          <div className="flex items-center  text-white gap-2 px-3  ">
            <Scissors size={25} className="hover:bg-[#707070] p-1  rounded" />
            <Copy size={25} className="hover:bg-[#707070] p-1  rounded" />
            <Clipboard size={25} className="hover:bg-[#707070] p-1  rounded" />
            <BookA size={25} className="hover:bg-[#707070] p-1  rounded" />
            <Forward size={25} className="hover:bg-[#707070] p-1  rounded" />
            <Trash size={25} className="hover:bg-[#707070] p-1  rounded" />
          </div>
        </div>
        {/*  */}
        <div className="border-r-2 border-[#2b2b2b] pr-2.5">
          <div className="flex items-center  text-white gap-2 px-3 text-sm">
            <div className="flex items-center hover:bg-[#2a2a2a] text-white gap-2 px-3 py-1 rounded-md ">
              <ArrowUpDown size={17} />
              <h1>Short</h1>
              <ChevronDown size={12} />
            </div>
            <div className="flex items-center hover:bg-[#2a2a2a] text-white  gap-2 px-3 py-1 rounded-md ">
              <Menu size={17} />
              <h1>View</h1>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
        {/* center part */}
        <div className="flex items-center justify-between w-full px-3.5">
          <Ellipsis size={27} className="hover:bg-[#707070] p-1  rounded" />
          <div className="flex items-center gap-2 hover:bg-[#707070] p-1  rounded text-sm">
            <ListChevronsDownUp size={17} />
            <h1>Details</h1>
          </div>
        </div>
      </div>

      {/* sidebar start */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 h-fit bg-[#1b1b1b] border-r border-[#2b2b2b]  text-white p-4 flex flex-col ">
          <div className="flex flex-col border-b border-[#2b2b2b] pb-5  ">
            <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
              <House size={17} /> Home
            </button>

            <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
              <BookImage size={17} /> Gallery
            </button>

            <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
              <ChevronRight size={12} /> <Cloudy size={17} /> Personal-items
            </button>
          </div>

          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm mt-6">
            <Airplay size={17} />
            Desktop
            <Pin size={15} />
          </button>

          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <ArrowDownToLine size={17} /> Downloads
            <Pin size={15} />
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded bg-gray-700 text-sm">
            <Book size={17} />
            Documents
            <Pin size={15} />
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <Image size={17} /> Pictures
            <Pin size={15} />
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <Music size={17} />
            Music
            <Pin size={15} />
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <Tv size={17} /> Videos
            <Pin size={15} />
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <FolderClosed size={17} />
            Portfolio
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <FolderClosed size={17} /> Learning Folder
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <FolderClosed size={17} /> Javascript Folder
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
            <FolderClosed size={17} />
            Ecommerce
          </button>
          <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm mb-6">
            <FolderClosed size={17} /> WhatsApp
          </button>
          <div className="pt-6 flex flex-col border-t border-[#2b2b2b]">
            <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm  ">
              <ChevronRight size={12} /> <Monitor size={17} />
              This PC
            </button>

            <button className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 text-sm">
              <ChevronRight size={12} /> <Computer size={17} /> Network
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {/* header */}
          <div>
            <i>
              <h1 class="text-xl font-bold">Hey! My Name is Amit</h1>
            </i>
            <p class="text-lg text-gray-300">Frontend Developer</p>
          </div>
          {/* skills section */}

          <h2 class="text-2xl font-semibold mt-3 py-2">Skills</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              Next.js
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              React
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              JavaScript
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              Redux Toolkit
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              React hooks from
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              Tailwind
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              Git
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              GitHub
            </span>
            <span class="px-3 py-2 bg-[#272626] rounded-lg font-medium">
              HTML
            </span>
            <span class="px-3 py-2 bg-[#272626]  rounded-lg font-medium">
              CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
