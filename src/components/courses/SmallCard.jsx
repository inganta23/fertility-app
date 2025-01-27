import React from "react";

const SmallCard = ({ topic, title }) => {
  return (
    <div className="rounded-md bg-[#F6F1E2] text-black p-2">
      <p className="text-sm">{topic}</p>
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export default SmallCard;
