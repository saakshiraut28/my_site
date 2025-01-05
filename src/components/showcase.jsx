/** @format */

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

const projects = [
  {
    id: "1",
    title: "Solana: Be Real.",
    description: "Capturing your authenticity and earn rewards.",
    imageUrl:
      "https://res.cloudinary.com/dtdsi5sev/image/upload/v1736099912/wallpaper.jpg",
    link: "https://reality-check-five.vercel.app/",
  },
  {
    id: "2",
    title: "Defi Application",
    description:
      "An application that provides robust features for wallet connectivity, token swapping, and real-time visualization of cryptocurrency prices",
    imageUrl:
      "https://res.cloudinary.com/dtdsi5sev/image/upload/v1736100470/pexels-davidmcbee-730564_yjtpxr.jpg",
    link: "https://solana-defi-app.vercel.app/",
  },
  {
    id: "3",
    title: "Get Together",
    description:
      "Getogether is a platform to help you manage your event in a better and more organised way! Categorizing your whole events into multiple sub-events and creating channels for that and groups to manage conversation among all event participants.",
    imageUrl:
      "https://res.cloudinary.com/dtdsi5sev/image/upload/v1736100679/AdobeStock_273520711_Preview_tg7ztj.jpg",
    link: "https://getogether-ten.vercel.app/",
  },
  {
    id: "4",
    title: "Solana Counter",
    description:
      "A counter that you can increment by signing in using your wallet.",
    imageUrl:
      "https://res.cloudinary.com/dtdsi5sev/image/upload/v1736101638/coolcat_bmw1q8.jpg",
    link: "https://solana-counter-sand.vercel.app/",
  },
];

export default function Showcase() {
  const [hoveredId, setHoveredId] = useState();
  const scrollContainerRef = useRef();

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative mx-auto px-2 lg:px-8 py-16 container">
      <div className="flex justify-between items-center">
        <h2 className="mb-8 font-bold text-xl">Projects</h2>
        <Link href="/#">
          <h2 className="font-medium text-indigo-500 text-md hover:underline">
            Checkout Github
          </h2>
        </Link>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex snap-mandatory snap-x overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-none mx-2 snap-start w-[calc(30%-1rem)]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div
                  className="relative shadow-lg rounded-lg overflow-hidden"
                  style={{ height: "400px" }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300"
                    style={{
                      opacity: hoveredId === project.id ? 0.3 : 1,
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    {/* Added a semi-transparent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Content container with fixed heights */}
                    <div className="relative z-10">
                      <h3 className="mb-2 line-clamp-1 h-8 font-semibold text-white text-xl">
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm text-gray-200 transition-all duration-300 h-20 overflow-hidden ${
                          hoveredId === project.id
                            ? "opacity-100 line-clamp-4"
                            : "opacity-0 line-clamp-3"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <Button
          className="top-1/2 left-0 absolute bg-white/80 hover:bg-white text-gray-800 transform -translate-y-1/2"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          className="top-1/2 right-0 absolute bg-white/80 hover:bg-white text-gray-800 transform -translate-y-1/2"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}
