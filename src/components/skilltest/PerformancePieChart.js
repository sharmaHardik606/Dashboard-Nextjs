"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#1447E6", "#87CEEB"]; 

export default function PerformancePieChart({ scoreData }) {
  const totalQuestions = 15; 
  const correct = scoreData.correct;
  const incorrect = totalQuestions - correct;

  const data = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: incorrect },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center self-start">Question Analysis</h1>
      <h2 className="text-md md:text-lg font-semibold mb-4 text-center">
        You answered {correct} out of {totalQuestions} questions correctly. Keep pushing for better results!
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

