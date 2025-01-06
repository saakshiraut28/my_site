/** @format */
"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-center my-16 px-2 lg:px-8">
        <div className="flex-1 w-full lg:w-1/2">
          <p className="font-semibold">Hi, I’m a developer from India.</p>
          <p className="py-2">
            I’ve been building projects around Solana Blockchain and AI while
            sharing my knowledge through blogs and content to make Solana easier
            to understand.
          </p>
          <p className="py-2">
            With experience in UI/UX design and web development, I enjoy
            creating seamless and impactful applications.
          </p>
          <p className="py-2">
            I’m actively seeking opportunities in DevRel or Developer roles
            within the Web3 space 🤝
          </p>
          <p>PS: You might find me in a room full of cats.</p>
        </div>
        <div className="w-1/2">
          <DotLottieReact
            src="https://lottie.host/8dc516dc-66af-4c1f-8d82-a8935a9f806d/PoGOL5TP7d.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Separator className="rounded-full w-20 h-1" />
      </div>
    </div>
  );
};
