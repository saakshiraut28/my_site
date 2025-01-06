/** @format */
"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "saakshiraut28@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="lg:flex flex-1 justify-center lg:justify-between items-center border-gray-200 bg-clip-padding bg-gray-400 bg-opacity-10 backdrop-blur-sm backdrop-filter my-2 px-2 lg:px-8 py-2 border rounded-md w-full font-Poppins">
      <div className="flex justify-center items-center gap-2 my-1">
        <span>Reach out at: </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 hover:text-indigo-500 transition-colors duration-200"
        >
          {email}
          {copied ? (
            <>
              <p className="text-black text-sm hover:text-black">Copied</p>
              <Check className="w-4 h-4 text-green-500" />
            </>
          ) : (
            <></>
          )}
        </button>
      </div>
      <div className="flex justify-center space-x-3 my-1">Made with 🫶</div>
    </div>
  );
};
