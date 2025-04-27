"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#1447E6", "#00BFFF", "#87CEEB"]; // Correct - Green, Incorrect - Red, Skipped - Orange

export default function PerformancePieChart({ scoreData }) {
  const data = [
    { name: "Correct", value: scoreData.correct },
    { name: "Incorrect", value: scoreData.incorrect },
    { name: "Skipped", value: scoreData.skipped },
  ];

  const totalQuestions = scoreData.correct + scoreData.incorrect + scoreData.skipped;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4 text-center">
        You answered {scoreData.correct} out of {totalQuestions} questions correctly. Keep pushing for better results!
      </h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
