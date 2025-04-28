"use client";

import { useState } from "react";
import QuickStatistics from "./QuickStatistics";
import PerformancePieChart from "./PerformancePieChart"; 
import SyllabusAnalysis from "./SyllabusAnalysis";
import SkillTestCard from "./SkillTestCard";

export default function SkillTestSection() {
  const [scoreData, setScoreData] = useState({
    correct: 10,
    incorrect: 5,
    rank: 1,
    score: 50,
    percentile: 70,
    attempted: 15,
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Left Section */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {/* Pass scoreData and setScoreData */}
        <SkillTestCard 
          scoreData={scoreData} 
          setScoreData={setScoreData} 
        />

        {/* Stats and Pie chart */}
        <QuickStatistics scoreData={scoreData} />
        <PerformancePieChart scoreData={scoreData} />
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
        <SyllabusAnalysis />
      </div>
    </div>
  );
}
