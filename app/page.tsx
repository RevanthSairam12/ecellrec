"use client";

import RetroGrid from "@/components/ui/retro-grid";
import EcellLogo from "./images/e-cell-rec.png";
import IICLogo from "./images/iic.png";
import RaghuLogo from "./images/raghu.png";
import Image from "next/image";
import Mydoc from "./Mydoc";
import BlurFade from "./BlurFadeCollage";
import { Vision } from "@/app/pages/Vision";
import { Mission } from '@/app/pages/Mission'
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BentoGridSecondDemo } from "./pages/BentoGrid";
import { Testimonials } from "./pages/testimonials";
import EventsVideo from './pages/EventsVideo';

export default function Home() {
  return (
    <div id="#myhome">
      {/* Top Section with Icon and Button */}
      <div className="flex justify-between items-center px-5 -mt-7">
        <div className="w-36 h-36">
          <Image
            src={EcellLogo}
            alt="Ecell Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-36 h-36">
          <Image
            src={RaghuLogo}
            alt="Ecell Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-36 h-36">
          <Image
            src={IICLogo}
            alt="Ecell Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden fade-up"
        id="main"
      >
        <h1 className="pointer-events-none p-5 z-10 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-center text-6xl md:text-8xl font-extrabold tracking-tight text-transparent">
          Innovation-cell
        </h1>
        <h3 className="pointer-events-none p-5 z-10 bg-gradient-to-r from-purple-700 via-violet-500 to-blue-600 bg-clip-text text-center text-xl md:text-xl font-extrabold tracking-tight text-transparent">
          Raghu Engineering College
        </h3>
        <div className="mb-64 hover:scale-110 ease-in-out duration-200">
          <RainbowButton>Join Us!</RainbowButton>
        </div>
        {/* Background Grid */}
        <RetroGrid />

        {/* Document Section */}
        <div className="fixed bottom-10 w-full flex justify-center z-10">
          <Mydoc />
        </div>
      </div>

      {/* Vision Component */}
      <div
        className="flex flex-col items-center justify-center mx-auto mb-40"
        id="vision"
      >
        <Vision />
      </div>
      {/* Mission */}
      <div id="mission">
        <Mission/>
      </div>
      {/* events */}
      <div className="m-44" id="events">
      <h1 className="text-4xl font-mono flex justify-center m-5">Expore Upcoming Events</h1>
        <EventsVideo/>
      </div>
      {/* events photo collage */}
      <div>
        <h1 className="text-4xl font-mono flex justify-center m-5">Highlights of Club</h1>
        <BlurFade/>
      </div>
      {/* Resources */}
      <div id="resources" className="mt-10">
      <h1 className="text-4xl font-mono flex justify-center m-5">Resources</h1>
      <BentoGridSecondDemo />
      </div>
      <div className="mt-4 items-center justify-center mx-auto ">
        {/* testimonials */}
        <div id="Testimonials">
          <Testimonials />
        </div>

        
        
      </div>
    </div>
  );
}
