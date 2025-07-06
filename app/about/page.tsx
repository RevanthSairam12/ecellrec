"use client";
import React from "react";
import Image from "next/image";

const about = [
  {
    imageSrc: "/raghu-sir-1.jpg",
    name: "Raghu Kalidindi",
    title: "Chairman, Raghu Educational Society",
    description: "Leading the vision and strategic direction of our educational institution with decades of experience in academic excellence.",
    expertise: "Strategic Leadership",
    color: "from-emerald-500 to-teal-600"
  },
  {
    imageSrc: "/RamaDevi-Kalidindi-1.jpg",
    name: "Rama Devi Kalidindi",
    title: "Secretary, Raghu Educational Society",
    description: "Overseeing administrative excellence and ensuring the highest standards of educational quality across all institutions.",
    expertise: "Administrative Excellence",
    color: "from-purple-500 to-pink-600"
  },
  {
    imageSrc: "/Rahul-Kalidindi-1.jpg",
    name: "Rahul Kalidindi",
    title: "Director, Raghu Educational Society",
    description: "Driving innovation and modern educational practices to prepare students for the challenges of tomorrow.",
    expertise: "Innovation & Growth",
    color: "from-blue-500 to-indigo-600"
  },
  {
    imageSrc: "/principal.jpg",
    name: "Dr. Ch. Srinivasu",
    title: "Principal, Raghu Educational Institution",
    description: "Providing academic leadership and fostering an environment of learning, research, and student development.",
    expertise: "Academic Leadership",
    color: "from-orange-500 to-red-600"
  },
  {
    imageSrc: "/kiranspecial.png",
    name: "Dr. G. Kiran Kumar",
    title: "Faculty Coordinator of ECELL REC",
    description: "Mentoring students in entrepreneurship and guiding the E-Cell initiatives towards success and innovation.",
    expertise: "Entrepreneurship",
    color: "from-green-500 to-emerald-600"
  },
  {
    imageSrc: "/ramesh-sir.jpg",
    name: "Dr. Ramesh Babu",
    title: "Coordinator - Entrepreneur Innovation Startup Committee (ESIC)",
    description: "Leading startup initiatives and fostering entrepreneurial spirit among students through innovative programs.",
    expertise: "Startup Ecosystem",
    color: "from-violet-500 to-purple-600"
  },
];

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-block mb-8">
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 animate-pulse">
                Advisory Board
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Meet our distinguished advisory board members who guide and inspire our entrepreneurial journey, 
              bringing decades of experience and expertise to shape the future of E-CELL REC.
            </p>
          </div>
        </div>

        {/* Advisory Board Members Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {about.map((member, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:-translate-y-4 overflow-hidden">
                  
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Image Section with Enhanced Effects */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        {/* Outer Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse`}></div>
                        
                        {/* Image Container */}
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:scale-110 group-hover:border-white/60 transition-all duration-700">
                          <Image 
                            src={member.imageSrc} 
                            alt={member.name} 
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        
                        {/* Floating Badge */}
                        <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${member.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500`}>
                          {member.expertise}
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-500">
                        {member.name}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                        {member.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {member.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-ping delay-300"></div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className={`h-1 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="container mx-auto px-6 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-xl rounded-full px-10 py-6 shadow-2xl border border-white/20">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-lg">
                Guiding Innovation • Fostering Excellence • Building Futures
              </span>
              <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
