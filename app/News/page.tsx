import React from "react";
import RetroGrid from "@/components/ui/retro-grid";


type NewsItem = {
  title: string;
  description: string;
  type: "announcement" | "important" | "update";
};

const newsData: NewsItem[] = [
  { title: "E-summit coming soon", description: "One of the biggest event held by E-CELL Andhra Pradesh.", type: "announcement" },
  { title: "Volunteers meet for Event", description: "Volunteers are requested to meet at Seminar hall by 6PM..", type: "important" },
  { title: "Hiring Volunteers for E-summit", description: "Grab the oppurtunity to take part in the biggest event to ever organize.", type: "update" },
];

const News: React.FC = () => {
  const typeStyles = {
    announcement: "bg-green-200 text-green-700",
    important: "bg-red-200 text-red-700",
    update: "bg-blue-200 text-blue-700",
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-xl font-bold bg-yellow-100 text-center px-4 py-2 shadow-md rounded-lg tracking-wide">
        News Section
      </div>
      {newsData.map((news, index) => (
        <div key={index} className="w-full max-w-xl p-4 border rounded-lg shadow-md bg-purple-300 relative cursor-pointer">
        <span
            className={`absolute top-2 right-2 px-3 py-1 text-sm font-medium rounded-full ${typeStyles[news.type]}`}
          >
            {news.type}
          </span>
          <h2 className="text-lg font-semibold">{news.title}</h2>
          <p className="text-gray-600">{news.description}</p>

        </div>
      ))}
      <RetroGrid/>
    </div>
  );
};

export default News;