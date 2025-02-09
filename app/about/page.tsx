import React from "react";
import CloseBtn from "@/app/News/close.svg";
import Image from "next/image";
import Link from "next/link";

const about = [
  {
    imageSrc: "/raghu-sir-1.jpg",
    name: "Raghu Kalidindi",
    title: "Chairman, Raghu Educational Society",
  },
  {
    imageSrc: "/RamaDevi-Kalidindi-1.jpg",
    name: "Rama Devi Kalidindi",
    title: "Secretary, Raghu Educational Society",
  },
  {
    imageSrc:"/Rahul-Kalidindi-1.jpg",
    name: "Rahul Kalidindi",
    title: "Director, Raghu Educational Society"
  },
  {
    imageSrc:"/principal.jpg",
    name: "Dr. Ch. Srinivasu",
    title: "Principal, Raghu Educational Institution",
  },
  {
    imageSrc:"/ramesh-sir.jpg",
    name: "Dr. Ramesh Babu",
    title: "Coordinator - Entrepreneur Innovation Startup Committee (ESIC)",
  },

];

const page = () => {
  return (
    <>
    <Link href="/" passHref>
        <div className="fixed right-0 top-0 z-10 p-4 cursor-pointer">
          <Image src={CloseBtn} width={30} height={30} alt="close" />
        </div>
      </Link>
      <div className="text-4xl text-blue-600 flex justify-center m-4" >Advisory Board</div>
      <div className="flex flex-wrap gap-4 m-4 p-4 rounded-lg justify-center">
        {about.map((member, index) => (
          <div key={index} className="card flex flex-col items-center gap-4 p-4 bg-slate-200 rounded-lg">
        <Image src={member.imageSrc} alt={member.name} width={100} height={100} className="rounded-full" />
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-bold">{member.name}</h2>
          <h3 className="text-sm">{member.title}</h3>
        </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
