"use client";

import { useState } from "react";
import QuickStatistics from "./QuickStatistics";
import PerformancePieChart from "./PerformancePieChart"; 
import SyllabusAnalysis from "./SyllabusAnalysis";
import SkillTestCard from "./SkillTestCard";
import MyLineChart from "./MyLineChart";

export default function SkillTestSection() {
  const [scoreData, setScoreData] = useState({
      correct: 9,
      rank: 1,
      percentile: 50,
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Left Section */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <SkillTestCard 
          scoreData={scoreData} 
          setScoreData={setScoreData} 
        />
        <QuickStatistics scoreData={scoreData} />
        <MyLineChart scoreData={scoreData} />
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
        <SyllabusAnalysis /> {/* <-- its static so no scoredata to it */}
        <PerformancePieChart scoreData={scoreData} />
      </div>
    </div>
  );
}
