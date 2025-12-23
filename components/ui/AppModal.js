"use client";

import { X, Minus } from "lucide-react";
import { useState } from "react";

export default function AppModal({
  isOpen,
  onClose,
  children,
  title = "Application",
}) {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-900">
      {/* WINDOW */}
      <div
        className={`
          pointer-events-auto
          fixed bg-[#1e1e1e]  border border-gray-600 
          rounded-md shadow-xl transition-all duration-200
          ${
            maximized
              ? "top-0 left-0 w-full h-[93vh]"
              : "top-28 left-1/2 -translate-x-1/2 w-[1000px] h-[560px]"
          }
          ${minimized ? "h-10 overflow-hidden" : ""}
          z-999
        `}
      >
        {/* TITLE BAR */}
        <div className="h-10 bg-[#2b2b2b] border-b border-gray-700 flex items-center justify-between px-3">
          <span className="text-sm"> {title}</span>

          <div className="flex items-center gap-1">
            {/* MINIMIZE */}
            <button
              onClick={() => setMinimized(!minimized)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-md"
            >
              <Minus size={16} />
            </button>

            {/* MAXIMIZE */}
            <button
              onClick={() => setMaximized(!maximized)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-md text-lg"
            >
              {maximized ? "❐" : "☐"}
            </button>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-red-600 rounded-md"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* APP CONTENT */}
        {!minimized && (
          <div className=" overflow-auto h-[calc(100%-40px)]">{children}</div>
        )}
      </div>
    </div>
  );
}
