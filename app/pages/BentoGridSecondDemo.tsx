import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton imageSrc={item.imageSrc} />}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ imageSrc }: { imageSrc: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image
      src={imageSrc}
      alt="Header content"
      layout="fill" 
      objectFit="cover" 
      className="rounded-xl" 
    />
  </div>
);

const items = [
  {
    title: "1. Startup Guides",
    description: "Navigate the journey of launching your business with step-by-step resources and insights.",
    className: "md:col-span-2",
    imageSrc: "/resources/startupGuides.png",
  },
  {
    title: "2. Entrepreneurship Tools",
    description: "Empower your startup with cutting-edge tools for growth and efficiency.",
    className: "md:col-span-1",
    imageSrc: "/resources/EntrepreneurshipTools.png",
  },
  {
    title: "3. Templates",
    description: "Access ready-to-use templates for business plans, pitches, and more.",
    className: "md:col-span-1",
    imageSrc: "/resources/templates.png",
  },
  {
    title: "4. Networking Resources",
    description: "Build meaningful connections to fuel your entrepreneurial success.",
    className: "md:col-span-2",
    imageSrc: "/resources/networkingResources.jpg",
  },
];

export default BentoGridSecondDemo;