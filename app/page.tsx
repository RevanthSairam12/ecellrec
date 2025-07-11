"use client";
import React from "react";
import Image from "next/image";
import EcellNew from "./images/ecellverynew.png";
import IICLogo from "./images/iic.png";
import RaghuLogo from "./images/raghu.png";
import { Vision } from "@/app/pages/Vision";
import { Mission } from '@/app/pages/Mission';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BentoGridSecondDemo } from "./pages/BentoGridSecondDemo";
import { Testimonials } from "./pages/testimonials";
import EventsVideo from './pages/EventsVideo';
import Team from "./team-cmp/Team";
import Footer from "./pages/Footer";
import TeamCard from "./team-cmp/TeamCard";
import About from "./about/page";
import BlurFade from "./BlurFadeCollage";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Redesigned */}
      <section className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Placeholder Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-[url('/ecellverynew.png')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-[#1a232e] bg-opacity-80" />
        </div>
        {/* LOGOS ROW: left, center, right */}
        <div className="relative z-20 w-full max-w-6xl flex flex-row justify-between items-start px-4 pt-0">
          <div className="w-40 md:w-56 h-auto flex items-center justify-start">
            <Image src={EcellNew} alt="Ecell Logo" className="object-contain" priority />
          </div>
          <div className="w-40 md:w-56 h-auto flex items-center justify-center">
            <Image src={RaghuLogo} alt="Raghu Logo" className="object-contain" priority />
          </div>
          <div className="w-40 md:w-56 h-auto flex items-center justify-end">
            <Image src={IICLogo} alt="IIC Logo" className="object-contain" priority />
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-6 py-16 gap-8 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e6c97b] mb-4 tracking-tight text-center" style={{letterSpacing: '1px'}}>E-CELL IIT BOMBAY</h1>
          <p className="text-lg md:text-xl text-white mb-6 font-medium leading-relaxed text-center">
            The Entrepreneurship Cell (E-Cell) of IIT Bombay has been inspiring Entrepreneurs since 1998 and is Asia&#39;s largest student-run entrepreneurship-promoting Non-Profit Organization as designated by Thomson Reuters.
          </p>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#d1b06b] hover:bg-[#e6c97b] text-lg font-bold text-[#232526] shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6c97b]">
            Know More <span className="text-2xl">→</span>
          </button>
        </div>
        {/* Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="text-4xl text-[#e6c97b]">↓</span>
        </div>
      </section>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center mx-auto mb-40" id="about">
        <About />
      </div>

      {/* Vision Component */}
      <div className="flex flex-col items-center justify-center mx-auto mb-40" id="vision">
        <Vision />
      </div>

      {/* Mission */}
      <div id="mission" className="mt-10">
        <h1 className="text-4xl font-mono flex justify-center m-5">Our Mission</h1>
        <Mission />
      </div>

      {/* Events */}
      <div className="mb-64 m-5 sm:m-44" id="events">
        <h1 className="text-xl sm:text-4xl font-mono flex justify-center m-5">Explore Past Events</h1>
        <EventsVideo />
        <div className="flex justify-center p-10" onClick={() => window.location.href = "https://esummit-rec.vercel.app/"}>
          <RainbowButton>Visit E-SUMMIT&apos;25 site</RainbowButton>
        </div>
      </div>

      {/* Highlights */}
      <div className="m-5">
        <h1 className="text-4xl font-mono flex justify-center m-10">Highlights</h1>
        <BlurFade />
      </div>

      {/* Resources */}
      <div id="resources" className="mt-40">
        <h1 className="text-4xl font-mono flex justify-center m-5">Resources</h1>
        <BentoGridSecondDemo />
      </div>

      {/* Faculty Coordinator */}
      <div id="team" className="mt-40">
        <h1 className="text-4xl font-mono flex justify-center m-5">Faculty Coordinator</h1>
        <div className="flex justify-center">
          <TeamCard
            key={20}
            role={""}
            name={"Dr. G. Kiran Kumar"}
            imageUrl="/kirankumar.png"
            socialLinks={[]}
          />
        </div>
      </div>

      {/* Team */}
      <div id="team" className="mt-40">
        <h1 className="text-4xl font-mono flex justify-center m-5">Our Team</h1>
        <Team />
      </div>

      {/* Testimonials */}
      <div className="mt-4 items-center justify-center mx-auto ">
        <div id="Testimonials">
          <Testimonials />
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <div className="w-full h-10 bg-black text-white flex items-center justify-center font-mono overflow-hidden">
        <span className="scrolling-text">Developed By WebTech Team © ECELL REC</span>
      </div>
    </>
  );
}
