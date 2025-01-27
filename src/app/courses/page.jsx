"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import FilterMenu from "@/components/courses/FilterMenu";
import Card from "@/components/shared/Card";
import SmallCard from "@/components/courses/SmallCard";
import { lessons } from "@/data/lessons";
import { articles } from "@/data/articles";
import { useState } from "react";
import { topics } from "@/data/topics";
import Image from "next/image";
import Banner from "@/components/courses/Banner";
import Link from "next/link";

function FilteredCourses() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const filteredCourses = courses.filter((course) => {
    if (filter === "all") return true;
    return course.type === filter;
  });

  return (
    <>
      <h1 className="text-black text-sm mt-8">
        COURSES({filteredCourses.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-5 py-6">
        {(filteredCourses || []).map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <Card {...course} key={course.id} />
          </Link>
        ))}
      </div>
    </>
  );
}

const Courses = () => {
  const [visibleArticles, setVisibleArticles] = useState(10);

  const handleShowMore = () => {
    setVisibleArticles(articles.length);
  };

  return (
    <section>
      <Banner />
      <section className="px-8">
        <section className="mb-10">
          <FilterMenu />
          <Suspense fallback={<div>Loading courses...</div>}>
            <FilteredCourses />
          </Suspense>
        </section>
        <section className="my-20">
          <h1 className="text-black text-sm font-bold mb-4">
            POPULAR LESSONS({(lessons || []).length})
          </h1>
          <div className="grid md:grid-cols-2 gap-2">
            {(lessons || []).map((lesson) => (
              <SmallCard
                title={lesson.title}
                topic={lesson.topic}
                key={lesson.id}
              />
            ))}
          </div>
        </section>
        <section className="my-20">
          <h1 className="text-black text-sm font-bold mb-4">QUICK READS</h1>
          <div className="grid md:grid-cols-2 gap-2">
            {(articles || []).slice(0, visibleArticles).map((article) => (
              <SmallCard
                title={article.title}
                topic={article.topic}
                key={article.id}
              />
            ))}
          </div>
          <div className="flex justify-end">
            {articles && articles.length > visibleArticles && (
              <button
                onClick={handleShowMore}
                className="bg-transparent font-bold hover:border-b mt-2 py-1 border-black transition-colors text-black"
              >
                Show {articles.length - visibleArticles} more
              </button>
            )}
          </div>
        </section>
        <section className="my-20">
          <h1 className="text-black text-sm font-bold mb-4">EXPLORE TOPICS</h1>
          <div className="flex flex-col gap-4">
            {topics.map((topic) => (
              <div key={topic.id} className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-6 sm:w-10 h-px bg-[#FFC8AA]" />
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[#FFC8AA] rounded-full" />
                </div>
                <h1 className="sm:text-3xl text-xl font-medium text-black">
                  {topic.topic}
                </h1>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/eye-thin.svg"
                    alt="Eye icon"
                    width={18}
                    height={18}
                  />
                  <p className="text-black text-xs font-bold">{topic.views}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Courses;
