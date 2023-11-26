"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Experience {
  time: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const experiences: Experience[] = [
    {
      time: "JUL 2023 - NOW",
      title: "Senior Fullstack Engineer",
      company: "GIC",
      companyUrl: "https://www.gic.com.sg",
      description:
        "I build data-driven applications to drive insights from multiple databases.",
      skills: ["NextJS", "Java", "AWS"],
    },
    {
      time: "JUN 2022 - JUL 2023",
      title: "Fullstack Engineer",
      company: "Trustana",
      companyUrl: "https://www.trustana.com",
      description:
        "Build highly performant web services on a distributed B2B platform. Create effective and responsive mobile and web experience.",
      skills: ["NextJS", "RemixJS", "NodeJS", "GraphQL", "AWS"],
    },
    {
      time: "APR - JUN 2022",
      title: "Fullstack Engineer",
      company: "Coinhall",
      companyUrl: "https://coinhall.org/",
      description:
        "Build decentralized exchange aggregator with real-time analytics",
      skills: ["SolidJS", "Golang", "AWS"],
    },
    {
      time: "JUL 2021 - MAR 2022",
      title: "Fullstack Engineer",
      company: "Switcheo",
      companyUrl: "https://www.switcheo.com/",
      description:
        "Build real-time decentralized trading platform with governance. Build blockchain explorer with insightful analytics",
      skills: ["React", "PostgresQL", "AWS"],
    },
    {
      time: "JUN 2019 - JUL 2021",
      title: "Technology Architect",
      company: "Sustenir",
      companyUrl: "https://sustenir.com/",
      description:
        "Build real-time autonomous agriculture environment control system. Value engineer over iterations of the farm control features and improve productivity of processes and yield output.",
      skills: ["PHP", "React", "Docker"],
    },
    {
      time: "FEB 2018 - MAY 2019",
      title: "Software Engineer",
      company: "Mediatek",
      companyUrl: "https://www.mediatek.com/",
      description:
        "Improve power integrity on pre-silicon polymer designs through validation simulations",
      skills: ["Python"],
    },
    {
      time: "AUG 2015 - FEB 2018",
      title: "Software Engineer",
      company: "Intel",
      companyUrl: "https://www.intel.com/content/www/us/en/homepage.html",
      description:
        "Build high-voltage verification tools for pre-silicon schematic designs",
      skills: ["Python", "C++"],
    },
    {
      time: "JUN 2014 - AUG 2015",
      title: "Design Engineer",
      company: "Sony",
      companyUrl: "https://www.sony.com.my/",
      description:
        "Build autonomous testing suite for software verification tests for audio systems of Sony's TV series.",
      skills: ["VBA"],
    },
  ];
  return (
    <main
      className="flex flex-col min-h-screen relative w-screen animate-dot-scrolling"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none inset-0 z-30 transition duration-300 absolute">
        <div
          className="spotlight"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between px-32 py-32 max-w-7xl mx-auto">
        <div className="sm:w-full md:w-1/2 md:top-32 md:sticky h-full justify-between grid">
          <div className="gap-y-4 flex flex-col">
            <div className="w-full text-start text-5xl md:text-6xl font-bold text-slate-300">
              Brandon Wong
            </div>
            <div className="text-slate-300">
              Senior Fullstack Engineer at GIC
            </div>
            <div className="text-sm">
              I build effective interfaces delivering the best user experience.
            </div>
          </div>
          <div className="flex gap-x-2 mt-4">
            <Link href="https://www.linkedin.com/in/brandonwong91">
              <Image
                src={"/linkedIn.svg"}
                width={24}
                height={24}
                alt="LinkedIn"
              />
            </Link>
            <Link href="https://github.com/brandonwong91">
              <Image src={"/github.svg"} width={24} height={24} alt="github" />
            </Link>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2 flex flex-col gap-y-12">
          <div className="text-justify mt-1 flex flex-col gap-y-2 text-sm">
            <span>
              I am a seasoned Fullstack Engineer with a strong passion for
              crafting exceptional digital experiences. My journey in the world
              of technology has led me to specialize in building and optimizing
              zero-to-one processes, architecting robust microservices, and
              delivering innovative engineering solutions.
            </span>
            <span>
              From enhancing user interactivity and responsiveness to
              implementing seamless onboarding flows and predictive models, I
              take pride in my ability to bring ideas to life. My commitment to
              clean software design methodologies, coupled with a history of
              successful project deployments, has empowered businesses to make
              informed decisions and achieve digital transformation.
            </span>
          </div>

          {experiences.map((ex) => {
            return (
              <div
                className="rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg hover:rounded-lg -m-3 p-3 hover:text-slate-300 text-slate-400 border border-transparent hover:bg-opacity-50"
                key={ex.company}
              >
                <div className="grid grid-cols-3">
                  <div className="text-xs col-span-1 mt-1">{ex.time}</div>

                  <div className="flex flex-col gap-y-2 col-span-2">
                    <div className="text-slate-200">{`${ex.title} · ${ex.company}`}</div>
                    ·<div className="text-sm">{ex.description}</div>
                    <div className="flex gap-2 flex-wrap">
                      {ex.skills.map((skill) => {
                        return (
                          <div
                            key={skill}
                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 "
                          >
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
