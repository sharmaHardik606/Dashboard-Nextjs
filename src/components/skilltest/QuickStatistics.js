import { BsAwardFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { TiTick } from "react-icons/ti";

export default function QuickStatistics({ scoreData, setScoreData }) {
  return (
    <div className="bg-white py-4 px-6 rounded-lg shadow-md">
      <h3 className="text-lg text-bolder mb-2">Quick Statistics</h3>

      <div className="flex justify-around gap-2">
      <div className="flex  items-center  gap-1">
      <BsAwardFill />
      Rank: {scoreData.rank}
      </div>
      <div className="flex  items-center gap-2 border-x-1">
      <SlNote />
      Percentile: {scoreData.percentile + "%"}
      </div>
      <div className="flex  items-center gap-2">
      <TiTick />
      Current Score: {scoreData.correct + "/" + "15" }
      </div>
    </div>
    </div>
  );
}
