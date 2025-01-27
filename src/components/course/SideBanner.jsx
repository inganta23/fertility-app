"use client";

import { useState } from "react";
import ExpertCard from "./ExpertCard";
import Image from "next/image";

const SideBanner = ({ experts }) => {
  const [currExpert, setCurrExpert] = useState(0);
  if (experts?.length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleCurrExpert = (num) => {
    if (currExpert === experts.length - 1 && num > 0) {
      setCurrExpert(0);
      return;
    }

    if (currExpert === 0 && num < 0) {
      setCurrExpert(experts.length - 1);
      return;
    }

    setCurrExpert(currExpert + num);
  };
  return (
    <div className="rounded-md bg-[#F6F1E2] text-black px-8 sm:w-80 sm:h-[600px] flex flex-col justify-end gap-8 py-6">
      <h1 className="sm:text-3xl text-xl italic">
        "Patients who use FertilityIQ give themselves a real advantage."
      </h1>
      <ExpertCard
        picture={experts[currExpert].picture}
        name={experts[currExpert].name}
        position={experts[currExpert].position}
        university={experts[currExpert].university}
      />
      <div className="flex items-center justify-end gap-2">
        <div
          className="w-fit h-fit rounded-full bg-[#D75555] cursor-pointer opacity-80 hover:opacity-100"
          onClick={() => handleCurrExpert(-1)}
        >
          <Image src="/arrow_icon.svg" alt="prev" width={42} height={42} />
        </div>
        <div
          className="w-fit h-fit rounded-full bg-[#D75555] cursor-pointer opacity-80 hover:opacity-100"
          onClick={() => handleCurrExpert(1)}
        >
          <Image
            src="/arrow_icon.svg"
            alt="next"
            width={42}
            height={42}
            className="rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
