"use client";

import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { RiStickyNote2Line } from "react-icons/ri";
import { useState } from "react";
import { HiX } from "react-icons/hi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);


  const [alerti, setAlert] = useState(false);
  const alertFunc = () => {
    setAlert(true); 
    alert("This section is under development. Please check back later.");
  };


  return (
    <>
      {/* Mobile Hamburger Menu - Only visible on mobile */}
      <div className="lg:hidden absolute top-5 left-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sidebar itself */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out fixed lg:static top-0 left-0 w-64 h-screen bg-white shadow-md p-6 z-40`}
      >
        {/* Close Button for mobile */}
        <div className="flex justify-end mb-6 lg:hidden ">
          <button onClick={() => setIsOpen(false)}>
            <HiX size={30} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500 flex items-center gap-2" onClick={alertFunc}>
            <MdOutlineSpaceDashboard />
            Dashboard
          </Link>
          <Link href="#" className="text-lg font-semibold text-blue-500 flex items-center gap-2">
            <SlBadge />
            Skill Test
          </Link>
          <Link href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500 flex items-center gap-2" onClick={alertFunc}>
            <RiStickyNote2Line />
            Internship
          </Link>
        </nav>
      </aside>
    </>
  );
}

