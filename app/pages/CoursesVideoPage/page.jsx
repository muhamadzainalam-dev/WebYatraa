"use client";

import { motion } from "framer-motion";
import { Lens } from "@/components/ui/lens";
import React, { useRef, useState, useEffect } from "react";
import { MdFullscreen } from "react-icons/md";

const HoverVideo = ({
  videoUrl,
  thumbnailUrl,
  isPlaying,
  onHover,
  onHoverEnd,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);

  const fullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const parentDiv = iframe.parentElement;
      if (parentDiv.requestFullscreen) {
        parentDiv.requestFullscreen();
      } else if (parentDiv.webkitRequestFullscreen) {
        parentDiv.webkitRequestFullscreen();
      } else if (parentDiv.msRequestFullscreen) {
        parentDiv.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const handleFullscreenChange = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div
      className="relative w-[560px] h-[315px] group"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(); // Signal that this video is playing
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd(); // Signal that this video is no longer playing
      }}
    >
      {!isPlaying ? (
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      ) : (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src={`${videoUrl}?autoplay=1&muted=1&controls=${
            isFullscreen ? 1 : 0
          }`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {isHovered && !isFullscreen && (
        <button
          onClick={fullscreen}
          className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-lg text-2xl hover:bg-gray-800"
        >
          <MdFullscreen />
        </button>
      )}
    </div>
  );
};

export default function CoursesVideoPage() {
  const [courses, setCourses] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Fetch video data from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/getCourseInfo");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center border-b w-[96%] mx-auto">
      <div className="container mx-auto py-20 w-[94%]">
        <motion.h1
          className="md:text-5xl text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Course Videos
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center justify-center gap-5 text-gray-500 text-center font-bold mb-8"
        >
          <p>HTML</p>
          <p>|</p>
          <p>CSS</p>
          <p>|</p>
          <p>JAVASCRIPT</p>
          <p>|</p>
          <p>PROJECTS</p>
          <p>|</p>
          <p>GIT</p>
          <p>|</p>
          <p>GITHUB</p>
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
                className="w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <HoverVideo
                  videoUrl={course.videopath}
                  thumbnailUrl={course.thumbnailPath}
                  isPlaying={playingVideoId === course._id}
                  onHover={() => setPlayingVideoId(course._id)}
                  onHoverEnd={() => setPlayingVideoId(null)}
                />
              </motion.div>
              <motion.div
                className="w-1/2 flex items-center h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              >
                <Lens>
                  <div className="w-full relative overflow-hidden bg-transparent mx-auto p-8 py-[88px]">
                    <div className="relative z-10">
                      <motion.div className="py-4 relative z-20 text-center">
                        <h2 className="text-black text-2xl font-bold">
                          {course.title}
                        </h2>
                        <p className="text-gray-600 mt-4 font-semibold">
                          {course.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </Lens>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
