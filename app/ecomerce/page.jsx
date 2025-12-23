"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// StudySnaps - UI Mockup (single-file React component using Tailwind + Framer Motion)
// Features in this mockup:
// - Landing / hero
// - Camera-capture mock (no real camera access) with upload and "scan" button
// - Result view with step-by-step solution cards
// - History list
// - Language toggle (English / Hindi) and lightweight animations

export default function StudySnapsUI() {
  const [screen, setScreen] = useState("home"); // home | capture | result | history
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("hi"); // hi or en
  const fileInputRef = useRef(null);

  function startCapture() {
    setScreen("capture");
    setResult(null);
  }

  async function mockScan(file) {
    setIsScanning(true);
    setResult(null);
    // simulate scanning time
    await new Promise((r) => setTimeout(r, 1400));

    // Mock results — show regional language-aware text
    const mock = {
      question:
        language === "hi"
          ? "\u0915\u094d\u0930\u093f\u092f\u093e: x + 5 = 12, x ka maan kya h?"
          : "Question: x + 5 = 12, what is x?",
      steps:
        language === "hi"
          ? ["x + 5 = 12", "x = 12 - 5", "x = 7"]
          : ["x + 5 = 12", "x = 12 - 5", "x = 7"],
      answer: language === "hi" ? "7 (uttar)" : "7 (answer)",
      confidence: "95%",
    };

    setResult(mock);
    setIsScanning(false);
    setScreen("result");
  }

  function onUploadClick() {
    fileInputRef.current?.click();
  }

  function onFilePicked(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    mockScan(file);
  }
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white p-6">
      <div>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl font-bold">
              SS
            </div>
            <div>
              <h1 className="text-xl font-semibold">StudySnaps</h1>
              <p className="text-sm text-gray-300">
                Instant homework/solution scanner (regional)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/6 rounded-xl p-2">
              <button
                className={`px-3 py-1 rounded-md font-medium ${
                  language === "hi"
                    ? "bg-yellow-400 text-black"
                    : "text-gray-200"
                }`}
                onClick={() => setLanguage("hi")}
              >
                हिंदी
              </button>
              <button
                className={`ml-1 px-3 py-1 rounded-md font-medium ${
                  language === "en"
                    ? "bg-yellow-400 text-black"
                    : "text-gray-200"
                }`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>

            <button
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow"
              onClick={() => setScreen("history")}
            >
              History
            </button>
          </div>
        </header>

        {/* Main area */}
        <main className="grid grid-cols-12 gap-6">
          {/* Left: App preview / instructions */}
          <section className="col-span-7 bg-white/5 rounded-2xl p-6">
            {screen === "home" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold mb-2">
                  {language === "hi"
                    ? "Homework ko scan karo"
                    : "Scan your homework"}
                </h2>
                <p className="text-gray-300 mb-6">
                  {language === "hi"
                    ? "Image lo ya upload karo — StudySnaps turant text pehchane aur step-by-step solution dikhayega."
                    : "Take a photo or upload — StudySnaps will extract text and show step-by-step solutions."}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={startCapture}
                    className="px-5 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow hover:scale-105 transform transition"
                  >
                    {language === "hi" ? "Scan Shuru Karo" : "Start Scanning"}
                  </button>

                  <button
                    onClick={onUploadClick}
                    className="px-5 py-3 border border-white/10 rounded-lg text-gray-200 hover:bg-white/5"
                  >
                    {language === "hi" ? "Image Upload Karo" : "Upload Image"}
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onFilePicked}
                  />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/3 rounded-xl p-4">
                    <h4 className="font-semibold">
                      {language === "hi" ? "Tips" : "Tips"}
                    </h4>
                    <ul className="text-sm text-gray-300 mt-2 space-y-1">
                      <li>
                        •{" "}
                        {language === "hi"
                          ? "Achhi roshni me photo lo"
                          : "Use good lighting"}
                      </li>
                      <li>
                        •{" "}
                        {language === "hi"
                          ? "Camera ko seedha rakhna"
                          : "Keep camera steady"}
                      </li>
                      <li>
                        •{" "}
                        {language === "hi"
                          ? "Clear handwriting se result better milega"
                          : "Clear handwriting improves results"}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/3 rounded-xl p-4">
                    <h4 className="font-semibold">
                      {language === "hi" ? "Supported" : "Supported"}
                    </h4>
                    <p className="text-sm text-gray-300 mt-2">
                      {language === "hi"
                        ? "Math, Science, Hindi/English text"
                        : "Math, Science, Hindi/English text"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {screen === "capture" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl font-bold mb-2">
                  {language === "hi" ? "Capture Page" : "Capture"}
                </h2>
                <p className="text-gray-300 mb-4">
                  {language === "hi"
                    ? "Camera placeholder — upload file as mock"
                    : "Camera placeholder — upload file as mock"}
                </p>

                <div className="border-2 border-dashed border-white/10 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-300">
                    <div className="w-40 h-28 bg-white/6 rounded-md mb-3 flex items-center justify-center">
                      Photo
                    </div>
                    <div className="text-sm">
                      {language === "hi"
                        ? "Yahan camera thumbnail dikhenga"
                        : "Camera thumbnail appears here"}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 bg-green-500 rounded-md font-semibold shadow"
                    onClick={() => onUploadClick()}
                  >
                    {language === "hi" ? "Image Upload karo" : "Upload Image"}
                  </button>

                  <button
                    className="px-4 py-2 bg-indigo-600 rounded-md font-semibold"
                    onClick={() => mockScan(null)}
                    disabled={isScanning}
                  >
                    {isScanning
                      ? language === "hi"
                        ? "Scanning..."
                        : "Scanning..."
                      : language === "hi"
                      ? "Scan Karo"
                      : "Scan"}
                  </button>

                  <button
                    className="px-4 py-2 bg-white/6 rounded-md"
                    onClick={() => setScreen("home")}
                  >
                    {language === "hi" ? "Cancel" : "Cancel"}
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onFilePicked}
                />
              </motion.div>
            )}

            {screen === "result" && result && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white/6 rounded-xl p-4 w-2/3">
                    <h3 className="text-xl font-semibold mb-2">
                      {language === "hi" ? "Question" : "Question"}
                    </h3>
                    <p className="text-gray-100/90">{result.question}</p>

                    <div className="mt-4">
                      <h4 className="font-semibold">
                        {language === "hi" ? "Step-by-step" : "Step-by-step"}
                      </h4>
                      <ol className="list-decimal ml-5 mt-2 text-gray-100">
                        {result.steps.map((s, i) => (
                          <li key={i} className="py-1">
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="bg-white/6 rounded-xl p-4 w-1/3">
                    <h4 className="font-semibold">
                      {language === "hi" ? "Answer" : "Answer"}
                    </h4>
                    <div className="text-3xl mt-3 font-bold">
                      {result.answer}
                    </div>

                    <div className="mt-4 text-sm text-gray-300">
                      <div>
                        {language === "hi" ? "Confidence" : "Confidence"}:{" "}
                        {result.confidence}
                      </div>
                      <div className="mt-3">
                        <button className="px-3 py-2 bg-yellow-400 text-black rounded-md mr-2">
                          {language === "hi" ? "Save" : "Save"}
                        </button>
                        <button
                          className="px-3 py-2 bg-white/6 rounded-md"
                          onClick={() => setScreen("home")}
                        >
                          {language === "hi" ? "New Scan" : "New Scan"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </section>

          {/* Right: Mock phone preview + History */}
          <aside className="col-span-5 space-y-4">
            <div className="bg-white/5 rounded-2xl p-4">
              <h4 className="font-semibold mb-3">Preview</h4>
              <div className="w-full h-64 bg-black/30 rounded-2xl flex items-center justify-center">
                <div className="w-40 h-72 bg-white/6 rounded-xl p-3 flex flex-col">
                  <div className="flex-1 bg-white/10 rounded-md mb-2" />
                  <div className="h-12 bg-white/6 rounded-md" />
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  className="flex-1 px-3 py-2 bg-indigo-600 rounded-md"
                  onClick={() => setScreen("capture")}
                >
                  {language === "hi" ? "Camera" : "Camera"}
                </button>
                <button
                  className="flex-1 px-3 py-2 bg-gray-700 rounded-md"
                  onClick={() => {
                    setScreen("home");
                    setResult(null);
                  }}
                >
                  {language === "hi" ? "Reset" : "Reset"}
                </button>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 h-80 overflow-auto">
              <h4 className="font-semibold mb-3">
                {language === "hi" ? "History" : "History"}
              </h4>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="bg-white/6 p-3 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <div className="text-sm font-medium">
                        {language === "hi" ? `Scan #${i}` : `Scan #${i}`}
                      </div>
                      <div className="text-xs text-gray-300">
                        {language === "hi" ? "Algebra" : "Algebra"} •{" "}
                        {language === "hi" ? "2 min ago" : "2 min ago"}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-yellow-400 text-black rounded">
                        Open
                      </button>
                      <button className="px-3 py-1 bg-white/6 rounded">
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>

        {/* Footer small */}
        <footer className="mt-6 text-center text-sm text-gray-400">
          Made with ❤️ — StudySnaps UI mockup
        </footer>
      </div>
    </div>
  );
}
