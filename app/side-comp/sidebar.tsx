"use client";
import React from "react";
import { FaCalendarAlt, FaHourglassHalf, FaHistory } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="flex h-[15rem]">
            {/* Sidebar Section */}
            <div className="flex flex-col items-center justify-evenly w-20 bg-gray-800 h-full rounded-lg shadow-lg">
                {/* Icon 1 */}
                <div className="group relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer">
                        <FaCalendarAlt className="text-white text-2xl" />
                    </div>
                    <div className="absolute w-40 left-20 top-2/4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition cursor-pointer">
                        Upcoming Events
                    </div>
                </div>

                {/* Icon 2 */}
                <div className="group relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer">
                        <FaHourglassHalf className="text-white text-2xl" />
                    </div>
                    <div className="absolute w-40 left-20 top-2/4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition cursor-pointer">
                        Ongoing Events
                    </div>
                </div>

                {/* Icon 3 */}
                <div className="group relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer">
                        <FaHistory className="text-white text-2xl" />
                    </div>
                    <div className="absolute w-40 left-20 top-2/4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition cursor-pointer">
                        Past Events
                    </div>
                </div>
            </div>
        </div>
    );
}
