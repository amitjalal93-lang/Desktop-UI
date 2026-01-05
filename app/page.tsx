"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import nature from "@/public/images/nature2.jpg";
import Bin from "@/public/images/recyclebin.png";
import file from "@/public/images/file.png";
import { motion } from "framer-motion";
const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    // draggable code
    Draggable.create(".icon", {
      type: "x,y",
      edgeResistance: 0.9,
      bounds: window,
      inertia: true,
    });
  }, []);

  return (
    <div className="relative">
      {/* background  image*/}
      <img src={nature.src} alt="window" className="h-screen w-full fixed" />

      {/* portfolio heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.05,
          rotate: 1,
          boxShadow: "0px 0px 30px rgba(255, 255, 0, 0.4)",
        }}
        className="absolute top-80 left-1/2 -translate-x-1/2 flex flex-col items-center text-center cursor-pointer"
      >
        <motion.h1
          className="text-gray-200 text-xl tracking-wide"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          Hey, I&apos;m Amit! Welcome to my
        </motion.h1>

        <motion.h1
          className="text-7xl font-extrabold flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-white">Port</span>

          <motion.span
            className="text-yellow-300 font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.2,
              y: -5,
              textShadow: "0 0 15px rgba(255, 200, 0, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            folio
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* portfolio */}
      <div className="icon absolute top-6 left-4 flex items-center flex-col cursor-pointer ">
        <img src={file.src} alt="file" className="w-10" />
        <h1 className="text-white font-bold text-center">Portfolio</h1>
      </div>

      {/* learning folder */}
      <div className="icon absolute top-26 left-4 flex items-center flex-col cursor-pointer">
        <img src={file.src} alt="file" className="w-10" />
        <h1 className="text-white font-bold flex flex-col items-center text-center">
          Learning
          <span>Folder</span>
        </h1>
      </div>

      {/*ecommerce folder ecommerce project open */}
      <div
        className="icon absolute top-26 right-4 flex items-center flex-col cursor-pointer "
        onClick={() =>
          window.open(
            "https://shopping-app-omega-six.vercel.app/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <img src={file.src} alt="file" className="w-10" />
        <h1 className="text-white font-bold  text-center">Ecommerce</h1>
      </div>

      {/* whatsapp folder watsapp project open  */}
      <div
        className="icon absolute top-46 right-4 flex items-center flex-col cursor-pointer "
        onClick={() =>
          window.open(
            "https://whatsapp-one-lake.vercel.app/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <img src={file.src} alt="file" className="w-10" />
        <h1 className="text-white font-bold  text-center">WhatsApp</h1>
      </div>

      {/* javascript folder */}
      <div className="icon absolute top-76 left-4 flex items-center flex-col cursor-pointer">
        <img src={file.src} alt="file" className="w-10" />
        <h1 className="text-white font-bold flex flex-col items-center text-center">
          Javascript
          <span>Folder</span>
        </h1>
      </div>

      {/* recycle bin */}
      <div className="icon absolute top-101 left-6 flex items-center flex-col cursor-pointer">
        <img src={Bin.src} alt="file" className="w-13" />
        <h1 className="text-white font-bold flex flex-col items-center text-center">
          Recycle
          <span>Bin</span>
        </h1>
      </div>
    </div>
  );
};

export default Page;
