/** @format */

import React from "react";
import { Github, LibraryBig, Linkedin, Send, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <div className="lg:flex flex-1 justify-center lg:justify-between items-center border-gray-100 bg-clip-padding bg-gray-400 bg-opacity-10 backdrop-blur-sm backdrop-filter my-2 px-2 lg:px-8 py-2 border rounded-md w-full font-Poppins">
      <div className="flex justify-center my-1">
        Reach out at: @saakshiraut28@gmail.com
      </div>
      <div className="flex justify-center space-x-3 my-1">Made with 🫶</div>
    </div>
  );
};
