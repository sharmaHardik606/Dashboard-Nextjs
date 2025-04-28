import { BsAwardFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { TiTick } from "react-icons/ti";

export default function QuickStatistics({ scoreData, setScoreData }) {
  return (
    <div className="bg-white py-4 px-6 rounded-lg shadow-md ">
      <h3 className="text-lg font-bold mb-2">Quick Statistics</h3>

      <div className="flex md:justify-around gap-2  justify-center flex-col md:flex-row">
      <div className="flex  items-center  gap-1">
      <BsAwardFill />
      Rank: {scoreData.rank}
      </div>
      <div className="flex  items-center gap-2 md:border-x-1 lg:border-gray-300 md:px-4">
      <SlNote />
      Percentile: {scoreData.percentile + "%"}
      </div>
      <div className="flex items-center gap-2">
      <TiTick />
      Current Score: {scoreData.correct + "/" + "15" }
      </div>
    </div>
    </div>
  );
}
