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
import { BentoGridSecondDemo } from "./pages/BentoGridSecondDemo";
import { Testimonials } from "./pages/testimonials";
import EventsVideo from './pages/EventsVideo';
import Team from "./team-cmp/Team";
import Footer from "./pages/Footer";
import TeamCard from "./team-cmp/TeamCard";

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
        <div className="w-36 h-36 mx-5">
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
          Innovation Cell
        </h1>
        <h3 className="pointer-events-none p-5 z-10 bg-gradient-to-r from-purple-700 via-violet-500 to-blue-600 bg-clip-text text-center text-xl md:text-xl font-extrabold tracking-tight text-transparent">
          Raghu Engineering College
        </h3>
        <div className="mb-64 hover:scale-110 ease-in-out duration-200" onClick={() => window.location.href = "/joinUsForm"}>
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
      <div id="mission" className="mt-10">
        <h1 className="text-4xl font-mono flex justify-center m-5">Our Mission</h1>
        <Mission/>
      </div>
      {/* events */}
      <div className="mb-64 m-5 sm:m-44" id="events">
      <h1 className="text-xl sm:text-4xl font-mono flex justify-center m-5">Explore Upcoming Events</h1>
        <EventsVideo/>
      </div>
      {/* events photo collage */}
      <div className="m-5">
        <h1 className="text-4xl font-mono flex justify-center m-10">Highlights</h1>
        <BlurFade/>
      </div>
      {/* Resources */}
      <div id="resources" className="mt-40">
      <h1 className="text-4xl font-mono flex justify-center m-5">Resources</h1>
      <BentoGridSecondDemo />
      </div>
      {/* coordinator */}
      <div id="team" className="mt-40">
      <h1 className="text-4xl font-mono flex justify-center m-5">Faculty Coordinator</h1>
      <div className="flex justify-center">
      <TeamCard
          key={20}
          role={"IIC Council Member"}
          name={"Kiran Kumar Sir"}
          imageUrl="/kirankumar.png"
          socialLinks={[]}
        />
      </div>
      </div>
      {/* Team */}
      <div id="team" className="mt-40">
      <h1 className="text-4xl font-mono flex justify-center m-5">Our Team</h1>
        <Team/>
      </div>
      <div className="mt-4 items-center justify-center mx-auto ">
        {/* testimonials */}
        <div id="Testimonials">
          <Testimonials />
        </div>
      </div>
      {/* Footer */}
      <Footer />
      <div className="w-full h-10 bg-black text-white flex items-center justify-center font-mono overflow-hidden">
        <span className="scrolling-text">Developed By WebTech Team © ECELL REC</span>
      </div>
    </div>
  );
}
