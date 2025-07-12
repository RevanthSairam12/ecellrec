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
import DockDemo from "./Mydoc";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent pointer-events-auto">
        <DockDemo />
      </div>
      {/* HERO SECTION - Redesigned */}
      <section className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden mt-24">
        {/* Animated Blurred Background Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000 z-0" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2 z-0" />
        {/* LOGOS ROW: left, center, right with animation */}
        <div className="absolute top-0 left-0 z-20 w-full flex flex-row justify-between items-start px-4">
          {/* Left logo */}
          <div className="w-40 md:w-56 h-auto flex items-center justify-start mt-3 animate-slide-in-left">
            <Image src={EcellNew} alt="Ecell Logo" className="object-contain" priority />
          </div>
          {/* Right logo */}
          <div className="w-40 md:w-56 h-auto flex items-center justify-end mt-3 animate-slide-in-right">
            <Image src={IICLogo} alt="IIC Logo" className="object-contain" priority />
          </div>
          {/* Center logo absolutely centered */}
          <div className="w-40 md:w-56 h-auto flex items-center justify-center mt-3 animate-slide-in-top" style={{position:'absolute', left:'50%', transform:'translateX(-50%)'}}>
            <Image src={RaghuLogo} alt="Raghu Logo" className="object-contain" priority />
          </div>
        </div>
        {/* Content with animation */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-6 py-16 gap-8 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e6c97b] mb-4 tracking-tight text-center animate-glow-fade-up" style={{letterSpacing: '1px'}}>E-CELL IIT BOMBAY</h1>
          <p className="text-lg md:text-xl text-white mb-6 font-medium leading-relaxed text-center animate-fade-in-delay">
            The Entrepreneurship Cell (E-Cell) of IIT Bombay has been inspiring Entrepreneurs since 1998 and is Asia&#39;s largest student-run entrepreneurship-promoting Non-Profit Organization as designated by Thomson Reuters.
          </p>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#d1b06b] hover:bg-[#e6c97b] text-lg font-bold text-[#232526] shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6c97b] animate-fade-in-delay hover:scale-105 hover:shadow-2xl">
            Know More <span className="text-2xl">→</span>
          </button>
        </div>
        {/* Down Arrow with bounce */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="text-4xl text-[#e6c97b]">↓</span>
        </div>
        {/* Animation Styles */}
        <style jsx global>{`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInTop {
            0% { opacity: 0; transform: translateY(-60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowFadeUp {
            0% { opacity: 0; transform: translateY(40px); text-shadow: none; }
            100% { opacity: 1; transform: translateY(0); text-shadow: 0 0 16px #e6c97b, 0 0 32px #e6c97b; }
          }
          @keyframes fadeInDelay {
            0% { opacity: 0; }
            60% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-slide-in-left { animation: slideInLeft 1s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-slide-in-right { animation: slideInRight 1s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-slide-in-top { animation: slideInTop 1s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-glow-fade-up { animation: glowFadeUp 1.2s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-fade-in-delay { animation: fadeInDelay 1.6s cubic-bezier(0.4,0,0.2,1) both; }
        `}</style>
      </section>

      <div className="fixed bottom-10 w-full flex justify-center z-10">
        <DockDemo />
      </div>

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
