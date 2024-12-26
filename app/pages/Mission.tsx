"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "1. Fostering an Entrepreneurial Culture",
    description:
      "At E-Cell REC, we strive to instill a strong entrepreneurial mindset among students. Through workshops, ideathons, and hackathons, we create an environment where innovation and creativity thrive, inspiring students to explore and pursue entrepreneurial opportunities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/path"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2. Empowering Students with Knowledge",
    description:
      "We offer engaging and educational activities that equip students with the skills they need to transform their ideas into impactful ventures. By fostering practical learning, we ensure they gain the knowledge required for success in the entrepreneurial world.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/path"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3. Guiding Students from Concept to Launch",
    description:
      "E-Cell REC hosts weekly sessions to provide students with step-by-step guidance throughout their entrepreneurial journey. From conceptualization to the launch of their ventures, we ensure that students receive mentorship and resources to bring their ideas to life.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/path"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "4. Building a Thriving Entrepreneurial Ecosystem",
    description:
      "Our goal is to create a collaborative and supportive ecosystem where students can share ideas, collaborate with peers, and gain insights from industry leaders. This fosters a thriving network that encourages growth, innovation, and the successful launch of ventures.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/path"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Mission() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
