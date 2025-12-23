"use client";

import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { BatteryFull, Volume2, Wifi } from "lucide-react";

import Wifimodal from "@/components/ui/Wifimodal";
import WifiContent from "@/app/connected/page.jsx";
import CalendarContent from "@/app/calender/page.jsx";

const Sright = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [modalType, setModalType] = useState("wifi");

  // time and date
  useEffect(() => {
    const update = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

      setDate(
        now.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="flex items-center text-xs">
        {/* language */}
        <Tippy
          content={
            <>
              English (India) <br />
              English (India)
              <br />
              <br />
              To switch input methods, press Windows key + space
            </>
          }
        >
          <div className="flex flex-col items-center hover:bg-[#2b381d] px-2 py-1 rounded-md cursor-pointer">
            <h1>ENG</h1>
            <h1>IN</h1>
          </div>
        </Tippy>

        {/* buttons, modal open */}
        <div
          onClick={() => {
            setModalType("wifi");
            setOpenModal(true);
          }}
          className="flex items-center gap-2 px-2 py-3 hover:bg-[#2b381d] rounded-md cursor-pointer"
        >
          <Tippy content="Wi-Fi" placement="bottom">
            <Wifi size={16} className="outline-none" />
          </Tippy>

          <Tippy content="Volume" placement="bottom">
            <Volume2 size={16} className="outline-none" />
          </Tippy>

          <Tippy content="Battery" placement="bottom">
            <BatteryFull size={16} className="outline-none" />
          </Tippy>
        </div>

        {/* Calendar */}
        <Tippy content={`${date} • ${time}`} placement="bottom">
          <button
            onClick={() => {
              setModalType("calendar");
              setOpenModal(true);
            }}
            className="flex flex-col items-center px-2 py-1 hover:bg-[#2b381d] rounded-md"
          >
            <h1>{time}</h1>
            <h1>{date}</h1>
          </button>
        </Tippy>
      </div>

      {/* main modal */}
      <Wifimodal open={openModal} onClose={() => setOpenModal(false)}>
        {/* wifi modal */}
        {modalType === "wifi" && <WifiContent />}
        {/* time modal */}
        {modalType === "calendar" && <CalendarContent />}
      </Wifimodal>
    </>
  );
};

export default Sright;
