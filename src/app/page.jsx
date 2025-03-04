/** @format */
"use client";
import Experience from "@/components/experience";
import { Header } from "@/components/header";
import Showcase from "@/components/showcase";


export default function Home() {
  return (
    <div className="flex-1 justify-center font-Poppins">
      <Header />
      <Experience />
      <Showcase />
    </div>
  );
}
