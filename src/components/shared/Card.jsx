"use client";

import Image from "next/image";
import { useMemo } from "react";

const Card = ({ title, description, experts, image, views }) => {
  const authorList = useMemo(() => {
    if (!experts || experts.length === 0) return [];
    return experts.slice(0, 2);
  }, [experts]);

  const formattedExperts = useMemo(() => {
    if (!authorList.length) return "No experts listed";

    const expertUniv = authorList.map((expert) => expert.university);

    return (
      expertUniv.join(", ") +
      (experts.length > 2 ? `, +${experts.length - 2} more` : "")
    );
  }, [authorList, experts]);

  return (
    <div className="bg-[#FCFAF5] rounded-2xl shadow-lg w-80 overflow-hidden h-96 relative group hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={700}
          height={100}
          className="max-w-none -ml-[380px] mt-2"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-black mt-2 text-sm">
          {description.split(" ").length > 15
            ? `${description.split(" ").slice(0, 15).join(" ")}...`
            : description}
        </p>
        <p className="text-black mt-4 text-sm">
          Featuring experts from {formattedExperts}
        </p>
      </div>

      {views && (
        <div className="absolute bottom-0 right-0 w-28 h-8 bg-[#F6F1E2] rounded-md flex justify-center">
          <div className="flex justify-center items-center gap-1">
            <Image
              src="/eye-thin.svg"
              alt="Eye icon"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-black text-sm">{views}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
