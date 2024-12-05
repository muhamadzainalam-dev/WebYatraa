"use client";

import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function OurCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/getPlaylistInfo");
        if (!response.ok) {
          throw new Error("Failed to fetch Playlist");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching Playlist:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center border-b w-[96%] mx-auto">
      <div className="container mx-auto py-24 w-[94%]">
        <motion.h1
          className="md:text-5xl text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Courses
        </motion.h1>
        <div className="space-y-10 md:space-y-20">
          {courses.map((course, index) => (
            <motion.div
              key={course._id}
              className={`md:flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-8`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="w-full flex items-center justify-center h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              >
                <Link href="/pages/CoursesVideoPage">
                  <FollowerPointerCard
                    title={<TitleComponent title={course.title} />}
                  >
                    <img
                      src={course.ImagePath}
                      alt={`${course.title} Image`}
                      className="w-[700px]  rounded-2xl border-2 border-gray-200 shadow-2xl transition ease-out hover:scale-110"
                    />
                  </FollowerPointerCard>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TitleComponent = ({ title }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);
