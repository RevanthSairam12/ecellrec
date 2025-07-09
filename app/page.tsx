"use client";
import React, { useState } from "react";
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
  const [cookie, setCookie] = useState(false);
  return (
    <>
      {/* Logo Row */}
      <div className="flex justify-between items-center px-5 pt-8 pb-2 w-full max-w-5xl mx-auto">
        <div className="w-32 h-32 md:w-40 md:h-40">
          <Image
            src={EcellNew}
            alt="Ecell Logo"
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="w-36 h-36 md:w-52 md:h-52 mx-2 md:mx-5">
          <Image
            src={RaghuLogo}
            alt="Raghu Logo"
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="w-36 h-36 md:w-52 md:h-52">
          <Image
            src={IICLogo}
            alt="IIC Logo"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Modern Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] overflow-hidden">
        {/* Glowing Background Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white drop-shadow-[0_0_20px_#00ffb3] mb-4 animate-glow">
            Entrepreneurship Cell
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-center text-green-200 drop-shadow-[0_0_10px_#00ffb3] mb-8 animate-glow">
            Igniting Innovation. Empowering Leaders. Building Startups.
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mb-10 text-base md:text-lg">
            Join a vibrant community of innovators, dreamers, and doers. At E-Cell REC, we nurture entrepreneurial spirit, provide resources, and connect you with mentors to turn your ideas into reality.
          </p>
          <div className="flex gap-4 mb-10">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-black font-bold shadow-lg hover:from-green-300 hover:to-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-green-400 text-green-200 font-bold shadow-lg hover:bg-green-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
              Learn More
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
        {/* Neon Glow Animations */}
        <style jsx global>{`
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
