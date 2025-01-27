"use client";

import { useState } from "react";

const Accordion = ({ title, children, index, playtime }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left text-black hover:bg-gray-200 transition-colors flex justify-between items-center"
      >
        <div className="flex justify-between w-[95%] items-center">
          <div className="flex flex-col">
            <p className="text-sm">Lesson {index + 1}</p>
            <h1 className="text-xl">{title}</h1>
          </div>
          <p className="text-xs">{playtime} min</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="text-black">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
