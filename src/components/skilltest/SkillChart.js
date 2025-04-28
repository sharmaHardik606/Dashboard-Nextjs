"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#4CAF50", "#F44336", "#FFC107"]; // Green, Red, Yellow

export default function SkillChart({ scoreData, setScoreData }) {
  const data = [
    { name: "Correct", value: scoreData.correct },
    { name: "Incorrect", value: scoreData.incorrect },
    { name: "Skipped", value: scoreData.skipped },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex-1">
      <h2 className="text-xl font-semibold mb-4">Skill-wise Analysis</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
