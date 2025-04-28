"use client";

export default function ScoreForm({ scoreData, setScoreData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    let numberValue = Number(value);

    if (name === "correct") {
      if (numberValue > 15) numberValue = 15; 
      if (numberValue < 0) numberValue = 0;   
    }

    if (typeof setScoreData === "function") {
      setScoreData((prev) => ({
        ...prev,
        [name]: numberValue,
      }));
    } else {
      console.error("setScoreData is missing!");
    }
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Rank */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Rank</label>
        <input
          type="number"
          name="rank"
          value={scoreData?.rank ?? ""}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
          placeholder="Enter Rank"
        />
      </div>

      {/* Percentile */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Percentile</label>
        <input
          type="number"
          name="percentile"
          value={scoreData?.percentile ?? ""}
          onChange={handleChange}
          min={0}
          max={100}
          className="border border-gray-300 rounded p-2"
          placeholder="0-100%"
        />
      </div>

      {/* Correct Questions */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Score</label>
        <input
          type="number"
          name="correct"
          value={scoreData?.correct ?? ""}
          onChange={handleChange}
          max={15}
          min={0}
          className="border border-gray-300 rounded p-2"
          placeholder="0-15"
        />
      </div>
    </form>
  );
}
