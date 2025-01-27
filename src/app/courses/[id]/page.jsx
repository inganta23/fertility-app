"use client";

import Banner from "@/components/course/Banner";
import ExpertCard from "@/components/course/ExpertCard";
import { courses } from "@/data/courses";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import SideBanner from "@/components/course/SideBanner";
import Accordion from "@/components/course/Accordion";
import Card from "@/components/shared/Card";
import Link from "next/link";

const Course = () => {
  const [visibleExperts, setVisibleExperts] = useState(6);
  const [course, setCourse] = useState(null);
  const [otherCourses, setOtherCourses] = useState(null);
  const [totalCourses, setTotalCourses] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const filteredCourse = courses.filter((course) => course.id === id);
    const excludeCurrCourse = courses.filter((course) => course.id !== id);

    setCourse(filteredCourse.length > 0 ? filteredCourse[0] : null);
    setOtherCourses(
      excludeCurrCourse.length > 8
        ? excludeCurrCourse.slice(0, 8)
        : excludeCurrCourse
    );
    setTotalCourses(excludeCurrCourse.length);
  }, []);

  const handleShowMore = () => {
    setVisibleExperts(course?.experts?.length);
  };

  if (course === null || otherCourses === null) return <h1>Loading...</h1>;

  return (
    <>
      <section>
        <Banner
          title={course?.title}
          image={course?.image}
          syllabus={course?.syllabus}
          courseLength={course?.courseLength}
          description={course?.description}
        />
      </section>
      <section className="my-20 px-8">
        <h1 className="text-black text-3xl font-medium mb-4">
          Experts you'll learn from
        </h1>
        <div className="grid sm:grid-cols-3 md:gap-x-20 gap-x-10 gap-y-5">
          {course?.experts?.slice(0, visibleExperts).map((expert, index) => (
            <ExpertCard
              key={index}
              name={expert.name}
              position={expert.position}
              picture={expert.picture}
              university={expert.university}
            />
          ))}
        </div>
        <div className="flex justify-end">
          {course?.experts && course?.experts?.length > visibleExperts && (
            <button
              onClick={handleShowMore}
              className="bg-transparent font-bold hover:border-b mt-2 py-1 border-black transition-colors text-black"
            >
              Show {course?.experts?.length - visibleExperts} more
            </button>
          )}
        </div>
      </section>
      <section className="grid sm:grid-cols-[2fr_1fr] gap-8 px-8">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src="/check.png"
                alt="Full refund"
                width={36}
                height={12}
              />
              <h1 className="text-black">
                "Full refund within 30 days, no question asked"
                <br />
                Eligible for FSA/HSA
              </h1>
            </div>
            <h1 className="text-black text-3xl">${course.price}</h1>
          </div>
          <section className="mt-20">
            <h1 className="text-black text-3xl font-medium mb-4">
              Course syllabus
            </h1>

            {course?.syllabus?.map((lessons, index) => (
              <div className="mt-4" key={index}>
                <Accordion
                  title={lessons.title}
                  index={index}
                  playtime={lessons.playtime}
                >
                  {lessons?.detail?.map((lesson, index) => (
                    <div
                      key={index}
                      className="border-b last:border-b-0 py-2 px-4"
                    >
                      <p>{lesson}</p>
                    </div>
                  ))}
                </Accordion>
              </div>
            ))}
          </section>
        </div>
        <div className="ml-auto">
          <SideBanner experts={course?.experts} />
        </div>
      </section>
      <section className="mt-20">
        <div className="py-20 px-8 bg-[#F6F1E2]">
          <h1 className="text-black text-4xl mb-4">What you'll learn</h1>
          <p className="text-black w-2/3">{course.courseHighlights}</p>
        </div>
      </section>
      <section className="my-20 px-8">
        <h1 className="text-black text-3xl font-medium mb-4">
          Other courses you might like
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-5 py-6">
            {otherCourses?.map((course) => (
              <Link href={`/courses/${course.id}`} key={course.id}>
                <Card {...course} key={course.id} />
              </Link>
            ))}
          </div>
          {totalCourses > 8 && (
            <Link
              href="/courses"
              className="px-4 py-2 my-10 rounded-md bg-[#D75555] w-fit text-sm opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-300"
            >
              Explore All Courses
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Course;
