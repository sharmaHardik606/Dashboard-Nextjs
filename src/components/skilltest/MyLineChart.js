"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Dummy base data
const baseDummyData = [
  { name: "0", percentile: 65 },
  { name: "25", percentile: 70 },
  { name: "50", percentile: 75 },
  { name: "75", percentile: 35 },
  { name: "78", percentile: 80 },
  { name: "35", percentile: 68 },
  { name: "66", percentile: 74 },
  { name: "40", percentile: 70 },
  { name: "100", percentile: 80 }, // <-- iam replacing this data right here
];

export default function MyLineChart({ scoreData }) {
  // Update the data to user's percentile the last one with the arrow
  const updatedData = baseDummyData.map((item) =>
    item.name === "100" ? { ...item, percentile: scoreData.percentile } : item
  );

  // Calculate average of the dummy points (excluding last one)
  const dummyAverage =
    baseDummyData
      .filter((item) => item.name !== "100")
      .reduce((sum, item) => sum + item.percentile, 0) /
    (baseDummyData.length - 1);

  // Compare user percentile with dummy average except the last one
  const comparisonText =
    scoreData.percentile > dummyAverage
      ? "above average "
      : scoreData.percentile < dummyAverage
      ? "below average "
      : "exactly average ";

  return (
    <div className="mb-8 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-2 px-6 py-4">Comparison Graph</h2>

      <p className="text-gray-500 mb-4 px-6">
        You scored <strong >{scoreData.percentile} percentile</strong>, which is{" "}
        <span className="font-semibold text-blue-600">{comparisonText}</span> compared to the average of{" "}
        <strong>{dummyAverage.toFixed(2)}%</strong>.
      </p>

      <div className="bg-white rounded-lg p-4">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={updatedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="percentile"
              stroke="#155dfc"
              activeDot={{ r: 8 }}
              name="Percentile"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
