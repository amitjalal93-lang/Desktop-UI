import Tippy from "@tippyjs/react";
import { Search, ChevronRight, Power } from "lucide-react";
import React from "react";

const pinnedApps = [
  { img: "images/photu4.png", name: "Edge", w: 70 },
  { img: "images/photu5.png", name: "Word", w: 60 },
  { img: "images/photu8.png", name: "Xbox", w: 60 },
  { img: "images/photu7.png", name: "Clock", w: 60 },
  { img: "images/photu6.png", name: "Setting", w: 60 },
  { img: "images/photu1.png", name: "McAfee", w: 60 },
  { img: "images/photu3.png", name: "Power Point", w: 55 },
  { img: "images/photu2.png", name: "Photus", w: 60 },
  { img: "images/photu9.png", name: "Paints", w: 50 },
  { img: "images/photu10.png", name: "Outlook", w: 60 },
];

const recommended = [
  {
    img: "images/chrome.png",
    name: "Google Chrome",
    info: "Frequently used app",
    w: 30,
  },
  {
    img: "images/photu3.png",
    name: "Photu1",
    info: "43 minutes ago",
    w: 50,
  },
];

const page = () => {
  return (
    <div className="bg-[#1F2020]">
      {/* Search Bar */}
      <div className="flex items-center bg-[#282828] px-2 py-1 mb-5 gap-5 rounded-full w-full">
        <Search size={20} className="text-sky-600" />
        <input
          type="text"
          placeholder="Search for apps, setting ,and documents"
          className="flex-1 outline-none text-white"
        />
      </div>

      {/* Pinned */}
      <div className="px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-sm">Pinned</h1>
          <button className="flex items-center gap-2 px-2 py-1 text-xs rounded bg-[#343434]">
            All <ChevronRight size={15} />
          </button>
        </div>

        {/* pinned images */}
        <div className="grid grid-cols-4 gap-2 py-8 place-items-center">
          {pinnedApps.map((app, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:bg-[#4b4b4b] px-4 py-2 w-fit"
            >
              <img src={app.img} alt={app.name} width={app.w} />
              <h1 className="text-sm">{app.name}</h1>
            </div>
          ))}
        </div>

        {/* recommended */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-sm">Recommended</h1>
          <button className="flex items-center gap-2 px-2 py-1 text-xs rounded bg-[#343434]">
            More <ChevronRight size={15} />
          </button>
        </div>

        {/* Recommended List */}
        <div className="grid grid-cols-2 justify-between place-items-center py-8">
          {recommended.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={item.img} alt={item.name} width={item.w} />
              <div>
                <h1>{item.name}</h1>
                <h1>{item.info}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar*/}
      <div className="flex items-center justify-between border-t border-[#6e6c6c] px-2 pt-5 ">
        <Tippy content="Amit Jalal, you have an important account notification">
          <div className="flex items-center gap-3 hover:bg-[#707070] rounded px-2 py-1">
            <img src="images/profile.png" alt="profile" width={25} />
            <h1>Amit Jalal</h1>
          </div>
        </Tippy>

        <Tippy content="Power" theme="dark" arrow={false}>
          <Power
            size={25}
            className="hover:bg-[#707070] p-1 rounded outline-none "
          />
        </Tippy>
      </div>
    </div>
  );
};

export default page;
