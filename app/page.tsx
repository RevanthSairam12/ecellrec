"use client";
import React, { useState } from "react";
import RetroGrid from "@/components/ui/retro-grid";
import EcellNew from "./images/ecellverynew.png";
import IICLogo from "./images/iic.png";
import RaghuLogo from "./images/raghu.png";
import Image from "next/image";
import Mydoc from "./Mydoc";
import BlurFade from "./BlurFadeCollage";
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

const mathElements = [
  { text: "(12+12)", style: "top-10 left-10 text-lg" },
  { text: "-15+6", style: "top-1/2 left-4 text-2xl" },
  { text: "3y", style: "top-1/3 left-1/4 text-base" },
  { text: "24", style: "bottom-10 left-1/3 text-xl" },
  { text: "12", style: "top-1/4 right-10 text-lg" },
  { text: "17-6-4", style: "top-1/2 right-1/4 text-2xl" },
  { text: "5x9", style: "bottom-1/4 right-1/3 text-lg" },
  { text: "-8", style: "bottom-1/3 right-10 text-base" },
];

export default function Home() {
  const [cookie, setCookie] = useState(false);
  return (
    <>
      {/* Neon-glow Hero Section */}
      <div className="relative min-h-screen bg-[#10191a] overflow-hidden flex flex-col justify-center items-center">
        {/* Floating Math Elements */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {mathElements.map((el, i) => (
            <span
              key={i}
              className={`absolute ${el.style} text-green-200/60 font-mono opacity-60 animate-float${i % 3}`}
              style={{ filter: "blur(0.5px)" }}
            >
              {el.text}
            </span>
          ))}
        </div>
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="mb-4 text-sm text-green-200 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Our Capital, Your <span className="font-bold">Success</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white drop-shadow-[0_0_20px_#00ffb3] mb-2 animate-glow">
            No Time Limit Prop Firm
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-200 drop-shadow-[0_0_10px_#00ffb3] mb-6 animate-glow">
            Conquer the market
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-xs font-medium border border-green-400/20">
              <span className="text-lg">🧪</span> The Lab™ Native platform
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-xs font-medium border border-green-400/20">
              ⚡ Fast progress
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-xs font-medium border border-green-400/20">
              ⏳ No time limit Prop firm
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-xs font-medium border border-green-400/20">
              🌟 Unique programs
            </span>
          </div>
          <div className="flex gap-4 mb-10">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-black font-bold shadow-lg hover:from-green-300 hover:to-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
              Start a challenge
            </button>
            <button className="px-8 py-3 rounded-full border border-green-400 text-green-200 font-bold shadow-lg hover:bg-green-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
              Free trial
            </button>
          </div>
        </div>
        {/* Cookie Consent Bar */}
        {!cookie && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#181f1b] bg-opacity-90 border border-green-900/30 rounded-xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 shadow-2xl backdrop-blur-md">
            <span className="text-xs text-gray-200">
              We use cookies and other technology to provide you with our services and for functional, analytical and advertising purposes. Please, read our Privacy Policy for more information.
            </span>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button
                className="px-4 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 text-xs font-semibold"
                onClick={() => setCookie(true)}
              >
                Decline
              </button>
              <button
                className="px-4 py-1 rounded bg-green-500 text-black hover:bg-green-400 text-xs font-semibold"
                onClick={() => setCookie(true)}
              >
                Accept
              </button>
            </div>
          </div>
        )}
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce z-20">
          <span className="text-xs text-green-200">Scroll to explore</span>
          <svg className="w-5 h-5 text-green-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {/* Neon Glow Animations */}
        <style jsx global>{`
          @keyframes float0 { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
          @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(10px); } 100% { transform: translateY(0); } }
          @keyframes float2 { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }
          .animate-float0 { animation: float0 6s ease-in-out infinite; }
          .animate-float1 { animation: float1 7s ease-in-out infinite; }
          .animate-float2 { animation: float2 5s ease-in-out infinite; }
          .animate-glow { text-shadow: 0 0 16px #00ffb3, 0 0 32px #00ffb3; }
        `}</style>
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
