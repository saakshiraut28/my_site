/** @format */
"use client";
import Experience from "@/components/experience";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import Showcase from "@/components/showcase";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 justify-center font-Poppins">
      <Header />
      <Experience />
      <Showcase />
    </div>
  );
}
