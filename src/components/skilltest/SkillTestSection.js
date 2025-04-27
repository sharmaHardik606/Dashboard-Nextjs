"use client";
import { useState } from "react";

import ScoreForm from "./ScoreForm";
import SkillTestCard from "../SkillTestCard";
import QuickStatistics from "../QuickStatistics";
import PerformancePieChart from "./PerformancePieChart"; // ADD this



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
    <div className="space-y-8">
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
  );
}
