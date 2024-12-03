"use client";

import RetroGrid from "@/components/ui/retro-grid";

import Image from "next/image";
import Mydoc from "./Mydoc";
import { Vision } from "@/app/pages/Vision";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurIn from "@/components/ui/blur-in";
import { InfiniteMovingCardsDemo } from "./pages/testimonials";
import { BentoGridSecondDemo } from "./pages/BentoGrid";
import { FocusCardsDemo } from "./pages/FocusCardsDemo";
import { StickyScrollRevealDemo } from "./pages/StickyScrollRevealDemo";



export default function Home() {
  return (
    <div id="#myhome">
      {/* Top Section with Icon and Button */}
      <div className="flex justify-between items-center p-2">
        <div className="w-28 h-28">
          <Image src={""} alt="Ecell Logo" className="w-full h-full object-contain" />
        </div>
        <div className="px-4">
          <RainbowButton>
            Know more
          </RainbowButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <BlurIn word="Innovative-cell" className="pointer-events-none p-5 z-10 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-center text-6xl md:text-8xl font-extrabold tracking-tight text-transparent" />
       
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
      <div className="mt-4 items-center justify-center mx-auto p-4 ">
    
      <BentoGridSecondDemo/>
      <section>
      <div className="mt-3 ">
      <p className=" p-4 bg-clip-text text-transparent text-2xl text-center drop-shadow-2xl bg-gradient-to-b from-white to- via-violet-300/20">
        Resources
        </p>
      <br/>
      <StickyScrollRevealDemo/>
      </div>
      </section>
      <h1 className="text-center  text-4xl p-4 transition-all ease-in delay-200 from-white to-slate-400">Hear What&#39;s the Speakers got to say about the club</h1>
     </div>
    </div>
  );
}
