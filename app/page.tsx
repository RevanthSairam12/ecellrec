"use client";

import RetroGrid from "@/components/ui/retro-grid";
import EcellIcon from "./images/EcellREClogo.png";
import Image from "next/image";
import Mydoc from "./Mydoc";
import { Vision } from "@/app/pages/Vision";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurIn from "@/components/ui/blur-in";

export default function Home() {
  return (
    <div id="#myhome">
      {/* Top Section with Icon and Button */}
      <div className="flex justify-between items-center p-2">
        <div className="w-28 h-28">
          <Image src={EcellIcon} alt="Ecell Logo" className="w-full h-full object-contain" />
        </div>
        <div className="px-4">
          <RainbowButton>
            Know more
          </RainbowButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <BlurIn word="E-cell" className="pointer-events-none p-5 z-10 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-center text-6xl md:text-8xl font-extrabold tracking-tight text-transparent" />
       
        <BlurIn word="Raghu Engineering College" className="pointer-events-none p-5 mb-64 z-10 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-center text-6xl md:text-8xl font-extrabold tracking-tight text-transparent" />

        {/* Background Grid */}
        <RetroGrid />

        {/* Document Section */}
        <div className="fixed bottom-10 w-full flex justify-center z-10">
          <Mydoc />
        </div>
      </div>

      {/* Vision Component */}
      <div className="flex flex-col items-center justify-center mx-auto mb-40" id="vision">
        <Vision />
      </div>
    </div>
  );
}
