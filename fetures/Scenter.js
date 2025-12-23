"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// images
import Window from "@/public/images/window.png";
import notes from "@/public/images/notes.png";
import file from "@/public/images/file.png";
import resume from "@/public/images/sky.jpg";
import chrome from "@/public/images/chrome.png";
import terminal from "@/public/images/terminal.png";
import copilot from "@/public/images/copilot.png";

// modals window and apps
import AppModal from "@/components/ui/AppModal";
import MuiWindowModal from "@/components/ui/MuiWindowModal";

// apps name
import ChromeApp from "@/app/chrome/page.jsx";
import FileApp from "@/app/file/page.jsx";
import NotesApp from "@/app/notes/page.jsx";
import TerminalApp from "@/app/terminal/page.jsx";
import CopilotApp from "@/app/copilot/page.jsx";
import WindowApp from "@/app/window/page.jsx";
import SearchApp from "@/app/resume/page.jsx";
import Resume from "@/app/resume/page.jsx";

const Scenter = () => {
  const [selected, setSelected] = useState("");
  const [openApp, setOpenApp] = useState(null);
  const [muiWindowOpen, setMuiWindowOpen] = useState(false);

  const btn =
    "hover:bg-[#2b381d] px-2 py-1 rounded-md flex flex-col items-center";

  const handleOpenModal = (appName) => {
    setSelected(appName);

    //  window open modal
    if (appName === "window") {
      setMuiWindowOpen(true);
      return;
    }

    // Other apps modal
    setOpenApp(appName);
  };

  const renderApp = () => {
    switch (openApp) {
      case "chrome":
        return <ChromeApp />;
      case "file":
        return <FileApp />;
      case "notes":
        return <NotesApp />;
      case "terminal":
        return <TerminalApp />;
      case "copilot":
        return <CopilotApp />;
      case "search":
        return <SearchApp />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        {/* window button */}
        <Tippy content="Start">
          <button
            onClick={() => handleOpenModal("window")}
            className={`${btn} ${
              selected === "window" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={Window.src} alt="window" width={32} height={30} />
          </button>
        </Tippy>

        {/* search bar */}
        <div className="flex items-center hover:bg-[#2b381d] border px-2 border-gray-300 rounded-full h-8 ">
          <Tippy content="Search">
            <Search className="w-6 h-4 text-white mr-3" />
          </Tippy>

          <Tippy content="Search">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-white"
            />
          </Tippy>

          <Tippy content="Search-Fibonacci Day">
            <img
              src="images/cloudy.png"
              alt="clouds"
              className="w-11 h-7 text-white ml-3"
            />
          </Tippy>
        </div>

        {/* copilot  button*/}
        <Tippy content="Copilot">
          <button
            onClick={() => handleOpenModal("copilot")}
            className={`${btn} ${
              selected === "copilot" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={copilot.src} alt="copilot" width={28} height={28} />
          </button>
        </Tippy>

        {/* terminal button*/}
        <Tippy content="Terminal">
          <button
            onClick={() => handleOpenModal("terminal")}
            className={`${btn} ${
              selected === "terminal" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={terminal.src} alt="terminal" width={28} height={28} />
          </button>
        </Tippy>

        {/* notes button */}
        <Tippy content="Notes">
          <button
            onClick={() => handleOpenModal("notes")}
            className={`${btn} ${
              selected === "notes" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={notes.src} alt="notes" width={21} height={21} />
          </button>
        </Tippy>

        {/* file button*/}
        <Tippy content="My skills">
          <button
            onClick={() => handleOpenModal("file")}
            className={`${btn} ${
              selected === "file" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={file.src} alt="file" width={26} height={26} />
          </button>
        </Tippy>

        {/* chrome button*/}
        <Tippy content="Chrome">
          <button
            onClick={() => handleOpenModal("chrome")}
            className={`${btn} ${
              selected === "chrome" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={chrome.src} alt="chrome" width={26} height={26} />
          </button>
        </Tippy>

        {/* resume button*/}
        <Tippy content="Resume page">
          <button
            onClick={() => handleOpenModal("resume")}
            className={`${btn} ${
              selected === "resume" ? "border-b-5 border-blue-500" : ""
            }`}
          >
            <Image src={resume.src} alt="resume" width={26} height={26} />
          </button>
        </Tippy>
      </div>

      {/* apps modals only */}
      <AppModal
        isOpen={!!openApp}
        onClose={() => setOpenApp(null)}
        title={`${openApp?.charAt(0).toUpperCase()}${openApp?.slice(1)}`}
      >
        {renderApp()}
      </AppModal>

      {/* window modal */}
      <MuiWindowModal
        open={muiWindowOpen}
        onClose={() => setMuiWindowOpen(false)}
      >
        <WindowApp />
      </MuiWindowModal>
    </>
  );
};

export default Scenter;
