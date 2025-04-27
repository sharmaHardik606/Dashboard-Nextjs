"use client";
import { useState } from "react";

import ScoreForm from "./ScoreForm";
import SkillTestCard from "../SkillTestCard";
import QuickStatistics from "../QuickStatistics";
import PerformancePieChart from "./PerformancePieChart"; // ADD this
import SyllabusAnalysis from "./SyllabusAnalysis";



export default function SkillTestSection() {
  const [showForm, setShowForm] = useState(false);
 
  const [scoreData, setScoreData] = useState({
    correct: 10,
    incorrect: 2,
    skipped: 3,
    rank: 1,
    score: 50,
    percentile: 70,
    attempted: 15,
  });
  

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap gap-8">
  {/* Left Side */}
  <div className="flex flex-col gap-4 w-full lg:w-2/3">
    <SkillTestCard onUpdateClick={() => setShowForm(true)} />

    {!showForm && (
      <>
        <QuickStatistics scoreData={scoreData} />
        <PerformancePieChart scoreData={scoreData} />
      </>
    )}

    {showForm && (
      <ScoreForm
        scoreData={scoreData}
        setScoreData={setScoreData}
        onCancel={() => setShowForm(false)}
        onSave={() => setShowForm(false)}
      />
    )}
  </div>

  {/* Right Side */}
  <div className="flex flex-col gap-2 w-1/3">
    <div className="bg-white py-4 px-6 rounded-lg shadow-md">
      <SyllabusAnalysis />
    </div>
  </div>
</div>

  );
}
