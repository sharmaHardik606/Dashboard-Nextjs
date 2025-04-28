"use client";

export default function ScoreForm({ scoreData, setScoreData,}) {

  function handleChange(e) {
    const { name, value } = e.target;
    if (typeof setScoreData === "function") {
      setScoreData((prev) => ({
        ...prev,
        [name]: Number(value),
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
          className="border border-gray-300 rounded p-2"
        />
      </div>

         {/* Score */}
         <div className="flex flex-col">
        <label className="mb-2 font-medium">Score</label>
        <input
          type="number"
          name="score"
          value={scoreData?.correct ?? ""} 
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>
    </form>
  );
}