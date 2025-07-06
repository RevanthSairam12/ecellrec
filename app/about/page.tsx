"use client";
import React from "react";
import Image from "next/image";

const about = [
  {
    imageSrc: "/raghu-sir-1.jpg",
    name: "Raghu Kalidindi",
    title: "Chairman, Raghu Educational Society",
    description: "Leading the vision and strategic direction of our educational institution with decades of experience in academic excellence.",
  },
  {
    imageSrc: "/RamaDevi-Kalidindi-1.jpg",
    name: "Rama Devi Kalidindi",
    title: "Secretary, Raghu Educational Society",
    description: "Overseeing administrative excellence and ensuring the highest standards of educational quality across all institutions.",
  },
  {
    imageSrc: "/Rahul-Kalidindi-1.jpg",
    name: "Rahul Kalidindi",
    title: "Director, Raghu Educational Society",
    description: "Driving innovation and modern educational practices to prepare students for the challenges of tomorrow.",
  },
  {
    imageSrc: "/principal.jpg",
    name: "Dr. Ch. Srinivasu",
    title: "Principal, Raghu Educational Institution",
    description: "Providing academic leadership and fostering an environment of learning, research, and student development.",
  },
  {
    imageSrc: "/kiranspecial.png",
    name: "Dr. G. Kiran Kumar",
    title: "Faculty Coordinator of ECELL REC",
    description: "Mentoring students in entrepreneurship and guiding the E-Cell initiatives towards success and innovation.",
  },
  {
    imageSrc: "/ramesh-sir.jpg",
    name: "Dr. Ramesh Babu",
    title: "Coordinator - Entrepreneur Innovation Startup Committee (ESIC)",
    description: "Leading startup initiatives and fostering entrepreneurial spirit among students through innovative programs.",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Advisory Board
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished advisory board members who guide and inspire our entrepreneurial journey, 
            bringing decades of experience and expertise to shape the future of E-CELL REC.
          </p>
        </div>
      </div>

      {/* Advisory Board Members Grid */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {about.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Image Section */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <Image 
                        src={member.imageSrc} 
                        alt={member.name} 
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    {member.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Section */}
      <div className="container mx-auto px-6 mt-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Guiding Innovation • Fostering Excellence • Building Futures
            </span>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
