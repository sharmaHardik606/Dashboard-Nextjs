"use client";

export default function SyllabusAnalysis() {
  const topics = [
    { name: "Arrays", progress: 80 },
    { name: "Functions", progress: 65 },
    { name: "Objects", progress: 50 },
    { name: "CSS Grid", progress: 70 },
    { name: "Flexbox", progress: 90 },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <p className="font-semibold text-gray-700 mb-2">{topic.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-700 h-2 rounded-full"
                style={{ width: `${topic.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
