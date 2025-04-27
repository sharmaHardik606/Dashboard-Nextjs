"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function QuestionChart({ scoreData = { correct: 0, incorrect: 0, skipped: 0 } }) {
  const data = [
    { name: "Correct", Questions: scoreData.correct || 0 },
    { name: "Incorrect", Questions: scoreData.incorrect || 0 },
    { name: "Skipped", Questions: scoreData.skipped || 0 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex-1">
      <h2 className="text-xl font-semibold mb-4">Question Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Questions" fill="#2B7FFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

