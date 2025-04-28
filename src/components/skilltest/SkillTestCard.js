"use client";

import { useState } from "react";
import Image from "next/image";
import ScoreForm from "./ScoreForm";

export default function SkillTestCard({ scoreData, setScoreData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex md:justify-between items-center flex-wrap justify-center md:flex-nowrap">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Image
            src="/html.jpg"
            alt="HTML5 Logo"
            width={40}
            height={40}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="text-sm md:text-xl font-bold">Hyper Text Markup Language</h2>
            <p className="text-gray-500 text-sm">
              Questions: 15 | Duration: 15 mins | Submitted on 27 April 2025
            </p>
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold"
        >
          Update
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* Form Title */}
            <h2 className="text-2xl font-bold mb-6">Update Scores</h2>

            {/* Score Form */}
            <ScoreForm scoreData={scoreData} setScoreData={setScoreData} />

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md"
              >
                Save ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

