"use client";

import {
  Wifi,
  Bluetooth,
  Plane,
  PersonStanding,
  BatteryPlus,
  KeyboardMusic,
  ChevronRight,
  SunDim,
  Volume2,
  BatteryFull,
  Settings,
} from "lucide-react";

export default function WifiContent() {
  return (
    <>
      {/* buttons container */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-6">
        {/* wifi  */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 bg-[#0e83ea] hover:bg-[#0b62ae] rounded-lg cursor-pointer">
            <Wifi size={17} />
            <ChevronRight size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Connected</h1>
        </div>

        {/* bluetooth */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 bg-[#0e83ea] hover:bg-[#0b62ae] rounded-lg cursor-pointer">
            <Bluetooth size={17} />
            <ChevronRight size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Not connected</h1>
        </div>

        {/* airplane mode */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 border border-[#3a3a3a] rounded-lg cursor-pointer">
            <Plane size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Airplane mode</h1>
        </div>

        {/* accessibility */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 border border-[#3a3a3a] rounded-lg cursor-pointer">
            <PersonStanding size={17} />
            <ChevronRight size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Accessibility</h1>
        </div>

        {/* energy saver */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 border border-[#3a3a3a] rounded-lg cursor-pointer">
            <BatteryPlus size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Energy saver</h1>
        </div>

        {/* live captions */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-4 w-full py-5 border border-[#3a3a3a] rounded-lg cursor-pointer">
            <KeyboardMusic size={17} />
          </div>
          <h1 className="text-sm mt-2 text-center">Live captions</h1>
        </div>
      </div>

      {/* brightness volume slider */}
      <div className="mt-10 space-y-4">
        <div className="flex items-center gap-4">
          <SunDim size={20} />
          <input type="range" className="w-full" />
        </div>
        <div className="flex items-center gap-4">
          <Volume2 size={20} />
          <input type="range" className="w-full" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-10 pb-5">
        <div className="flex items-center gap-4">
          <BatteryFull size={17} />
          <h1>95%</h1>
        </div>
        <Settings size={17} />
      </div>
    </>
  );
}
