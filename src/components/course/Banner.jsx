import { formatMinutesToHours } from "@/data/helper";
import Image from "next/image";

const Banner = ({ title, description, syllabus, courseLength, image }) => {
  return (
    <div className="w-full h-fit bg-[#F6F1E2] pb-14 flex flex-col justify-end">
      <div className="w-full overflow-hidden mt-8">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={400}
          className="w-full object-cover"
        />
      </div>
      <div className="px-8 flex flex-col mb-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/television.svg"
              alt="syllabus length"
              width={16}
              height={16}
            />
            <p className="text-black text-xs font-medium">
              {syllabus?.length > 1
                ? `${syllabus?.length} Lessons`
                : `${syllabus?.length} Lesson`}{" "}
            </p>
          </div>
          {courseLength && (
            <div className="flex items-center gap-1">
              <Image src="/time.svg" alt="time length" width={16} height={16} />
              <p className="text-black text-xs font-medium">
                {formatMinutesToHours(courseLength)}
              </p>
            </div>
          )}
        </div>
        <h1 className="text-6xl font-medium text-black mt-4">{title}</h1>
        <p className="text-black my-8 text-lg">{description}</p>
        <button className="p-4 rounded-md bg-[#D75555] w-fit opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-300">
          Start Learning
        </button>
        <p className="text-black mt-4 font-medium hover:border-b border-black h-6 w-fit cursor-pointer flex items-center">
          Buy This Course
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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
        </p>
      </div>
    </div>
  );
};

export default Banner;
