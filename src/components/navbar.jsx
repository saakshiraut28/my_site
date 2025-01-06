/** @format */

import React from "react";
import { Github, LibraryBig, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="lg:flex flex-1 justify-center lg:justify-between items-center border-gray-200 bg-clip-padding bg-gray-400 bg-opacity-10 backdrop-blur-sm backdrop-filter px-2 lg:px-8 py-2 border rounded-md w-full">
      <div className="flex justify-center my-1 font-black font-Montserrat text-2xl">
        Saakshi Raut.
      </div>
      <div className="flex justify-center space-x-3 my-1">
        <Link href="https://twitter.com/saakshitwt">
          <Twitter
            size={24}
            color="#000000"
            strokeWidth={1.5}
            className="hover:animate-pulse hover:stroke-indigo-500"
          />
        </Link>
        <Link href="https://github.com/saakshiraut28/">
          <Github
            size={20}
            color="#000000"
            strokeWidth={1.5}
            className="hover:animate-pulse hover:stroke-indigo-500"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rautsaakshi">
          <Linkedin
            size={20}
            color="#000000"
            strokeWidth={1.5}
            className="hover:animate-pulse hover:stroke-indigo-500"
          />
        </Link>
        <Link href="https://medium.com/@saakshiraut28/">
          <LibraryBig
            size={20}
            color="#000000"
            strokeWidth={1.5}
            className="hover:animate-pulse hover:stroke-indigo-500"
          />
        </Link>
        <Link href="https://t.me/sraut28">
          <Send
            size={20}
            color="#000000"
            strokeWidth={1.5}
            className="hover:animate-pulse hover:stroke-indigo-500"
          />
        </Link>
      </div>
    </div>
  );
};
