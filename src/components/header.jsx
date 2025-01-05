/** @format */
"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-center px-2 lg:px-8 pt-8">
        <div className="flex-1 w-full lg:w-1/2">
          <p>Hello</p>
          <p className="py-2">
            A web developer who can design and develop amazing websites for you,
            like the one you are currently viewing ;)
          </p>
          <p className="py-2">
            And I love building cool stuff, and currently, I'm working on some
            Web3 projects.
          </p>
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
