/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    company: "Codemugg.",
    position: "Developer & Devrel",
    period: "Jan 2020 - March 2022",
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
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-1 text-lg">{exp.position}</CardTitle>
                  <CardDescription className="text-md">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-sm">
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
          <Button>
            Resume <ScanSearch size={20} color="#fff" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </section>
  );
}