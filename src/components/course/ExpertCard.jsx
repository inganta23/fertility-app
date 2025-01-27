import Image from "next/image";

const ExpertCard = ({ picture, position, name, university }) => {
  return (
    <div className="rounded-md border text-black p-2 flex items-center gap-4">
      <div className="rounded-full border border-white w-24 h-24 overflow-hidden">
        <Image
          src={picture}
          alt={name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h1 className="text-black font-bold mb-1">{name}</h1>
        <p className="text-sm text-black">{position}</p>
        <p className="text-sm text-black">{university}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
