"use client";

export default function ScoreForm({ scoreData, setScoreData }) {
  
  function handleChange(e) {
    const { name, value } = e.target;
    setScoreData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Correct
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Correct</label>
    <input
      type="number"
      name="correct"
      value={scoreData?.correct ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />

  </div> */}

  {/* Incorrect
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Incorrect</label>
    <input
      type="number"
      name="incorrect"
      value={scoreData?.incorrect ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div> */}

  {/* Skipped
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Skipped</label>
    <input
      type="number"
      name="skipped"
      value={scoreData?.skipped ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div> */}

  {/* Rank */}
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Rank</label>
    <input
      type="number"
      name="rank"
      value={scoreData?.rank ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div>

  {/* Score */}
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Score</label>
    <input
      type="number"
      name="score"
      value={scoreData?.scor ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div>

  {/* Percentile */}
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Percentile</label>
    <input
      type="number"
      name="percentile"
      value={scoreData?.perc ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div>

  {/* Attempted
  <div className="flex flex-col">
    <label className="mb-2 font-medium">Attempted</label>
    <input
      type="number"
      name="attempted"
      value={scoreData?.atte ?? ""}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2"
    />
  </div> */}
</form>
  );
}
