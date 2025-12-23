"use client";

import React from "react";

export default function Wifimodal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <>
      {/* background overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-999"
        aria-hidden="true"
      />

      {/* modal setting */}
      <div
        className="
          fixed 
          right-4
          bottom-14
          z-1000
          w-[390px]
          h-[400px]
          bg-[#1f1f1f] 
          text-white 
          rounded-xl 
          shadow-2xl 
          p-4
        "
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  );
}
