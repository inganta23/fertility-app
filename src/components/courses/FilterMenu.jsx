"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filters = ["all", "introductory", "advanced", "population specific"];

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter && filters.includes(filter)) {
      setActiveFilter(filter);
    } else {
      setActiveFilter("all");
    }
  }, [searchParams]);

  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filter === "all") {
      params.delete("filter");
      setActiveFilter("all");
    } else {
      params.set("filter", filter);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center gap-4 border-b">
      <button
        className="sm:hidden p-2 focus:outline-none text-black"
        onClick={toggleMenu}
        aria-label="Toggle filter menu"
      >
        {isMenuOpen ? (
          <Image
            src="/close.svg"
            alt="Open menu"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        ) : (
          <Image
            src="/burger.svg"
            alt="Open menu"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        )}
      </button>

      <div
        className={`sm:flex sm:flex-row sm:gap-2 ${
          isMenuOpen ? "flex flex-col gap-2" : "hidden"
        }`}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 sm:py-4 text-sm transition-colors duration-200 text-black capitalize ${
              activeFilter === filter && "border-b-2 border-red-600"
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
