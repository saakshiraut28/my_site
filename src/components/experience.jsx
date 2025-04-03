/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ScanSearch } from "lucide-react";
import { Button } from "./ui/button";

const experiences = [
  {
    id: "1",
    company: "Okto.",
    position: "Technical Writer",
    period: "Feb'25 - Present",
    description:
      "Developed comprehensive technical documentation for the Okto SDK, streamlining the developer onboarding process. And Created template applications to demonstrate seamless integration and best practices for utilizing the Okto SDK.",
    skills: ["React", "Okto-Sdk", "TypeScript", "Tailwind CSS", "Web3"],
  },
  {
    id: "2",
    company: "Codemugg.",
    position: "Devrel",
    period: "Jan'20 - March'22",
    description:
      "Collaborated closely with developers and the founders to simplify technical concepts and improve product understanding. Also worked on the frontend and backend of the site.",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState();

  return (
    <section className="mx-auto px-2 lg:px-8 py-2 container">
      <h2 className="mb-8 font-bold text-xl">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="hover:border-black cursor-pointer"
            onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
          >
            <CardHeader>
              <div className="md:flex flex-1 justify-between items-start">
                <div>
                  <CardTitle className="mb-1 text-lg">{exp.position}</CardTitle>
                  <CardDescription className="text-md">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="my-2 md:my-0 text-sm">
                  <Calendar className="mr-1 w-4 h-4" />
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <motion.div
                initial={false}
                animate={{ height: expandedId === exp.id ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <h4 className="flex items-center mb-2 font-semibold">
                  <Briefcase className="mr-2 w-4 h-4" />
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        ))}
        <div className="flex justify-center">
          <Link
            href="/Saakshi_Raut_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 hover:bg-indigo-500 transition-colors">
              Resume
              <ScanSearch size={20} color="#fff" strokeWidth={2} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
