"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
} from "lucide-react";
import { TechStack } from "@/src/components/tech-stack";
// import { ProjectCard } from "@/src/components/project-card";
import ThemeSwitch from "@/src/components/ThemeSwitch";
import Link from "next/link";

// Work experience data
const workExperience = [
  {
    company: "Method3",
    position: "Full Stack Developer",
    location: "Sparta, New Jersey",
    period: "July 2023 - Present",
    website: "https://method3.com/",
    description: "Built a full-stack AWS S3 content management system with React and Node. Rebuilt over 100 pages from jQuery to modern, responsive pages using React, TypeScript, and Material-UI. Developed interactive tools with React Reducer and MUI components. Conducted rigorous code reviews, promoted best practices, and optimized GitLab deployments."
  },
  {
    company: "Maze Digital",
    position: "Full Stack Developer",
    location: "Marsa, Malta",
    period: "March 2022 - July 2023",
    website: "https://maze.digital/",
    description: "Developed a Node.js/Express server hosted on AWS Lambda to integrate Xero and Sage accounting APIs. Implemented an AWS Step Function to calculate carbon usage by importing invoices through a state machine. Built a robust Admin Portal using React with TypeScript. Enhanced the CRM application with Cypress for end-to-end tests and Jest for unit tests."
  },
  {
    company: "Overteam",
    position: "Full Stack Developer",
    location: "Moscow, Russia",
    period: "May 2021 - May 2022",
    website: "https://overteam.ru/",
    description: "Developed complex SQL queries and Node.js backend for a dynamic AdInsure insurance platform. Built React UI components for a seamless user experience. Utilized NodeJS and Puppeteer to generate dynamic contracts based on user input. Implemented validation handling for the contract creation process and designed unit tests using Mocha."
  }
];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#191919] text-[#42446e] dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#191919]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#42446e] dark:text-white font-bold text-lg"
            >
              {"<SS/>"}
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-[#00d8ff] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#00d8ff] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tech-stack")}
                className="hover:text-[#00d8ff] transition-colors"
              >
                Tech Stack
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-[#00d8ff] transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#00d8ff] transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeSwitch />
              <Github className="w-5 h-5 cursor-pointer hover:text-[#00d8ff]" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#00d8ff]" />
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-between py-16"
        >
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">
              Hey,
              <br />
              My name is{" "}
              <span className="text-[#00d8ff] dark:text-[#00d8ff]">
                Seraphim Sakiewicz
              </span>
              <br />
            </h1>
            <p className="text-3xl font-bold mt-4">I build things for the web</p>
          </div>
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <div className="rounded-full border-4 border-[black] dark:border-[white] w-48 h-48 overflow-hidden">
              <Image
                src="/images/seraphim-codes.png?height=192&width=192"
                alt="Seraphim Sakiewicz"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 space-y-6">
          <h2 className="text-2xl font-bold text-[#42446E] dark:text-white">
            About Me
          </h2>
          <div className="space-y-4">
            <p className="text-[#666666] dark:text-[#a7a7a7] max-w-3xl leading-relaxed">
              Full‑Stack engineer specializing in React, Node, TypeScript, and AWS (Lambda, DynamoDB, OpenSearch, StateMachines).
              I&apos;m currently studying Next.js and GenAI.
            </p>
            <p className="text-[#666666] dark:text-[#a7a7a7] max-w-3xl leading-relaxed">
              I have 3 years of experience in the industry and I have built applications for the insurance,
              environmental sustainability, and financial industries.
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-[#42446E] dark:text-white">
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <div key={index} className="pb-8 border-b border-[#EBEAED] dark:border-gray-800">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl font-medium text-[#42446E] dark:text-white mb-2">
                            {job.position}
                          </h4>
                          <div className="flex items-center gap-6 text-[#666666] dark:text-[#a7a7a7]">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              <span>
                                <Link
                                  href={job.website}
                                  target="_blank"
                                  className="hover:text-[#00d8ff] transition-colors underline decoration-dotted"
                                >
                                  {job.company}
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#666666] dark:text-[#a7a7a7]">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Job Description */}
                      <div className="mt-4">
                        <p className="text-[#666666] dark:text-[#a7a7a7] leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-[#42446E] dark:text-white">
                  Education
                </h3>
                <div className="pb-8 border-b border-[#EBEAED] dark:border-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-medium text-[#42446E] dark:text-white mb-2">
                        Bachelor of Science in Accounting and Finance
                      </h4>
                      <div className="flex items-center gap-6 text-[#666666] dark:text-[#a7a7a7]">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span> Rutgers Business School</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>New Brunswick, NJ</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#666666] dark:text-[#a7a7a7]">
                        <Calendar className="w-4 h-4" />
                        <span>Sep 2016 - Dec 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-2">My Tech Stack</h2>
          <p className="text-center text-[#666666] dark:text-[#a7a7a7] mb-12">
            Technologies I&apos;ve been working with recently
          </p>

          <TechStack />
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-2">Projects</h2>
          <p className="text-center text-[#666666] dark:text-[#a7a7a7] mb-12">
            Things I&apos;ve built so far
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProjectCard
                key={index}
                title={`Project ${index} goes here`}
                description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                imageUrl={`/placeholder.svg?height=200&width=300`}
                techStack={["HTML", "CSS", "JavaScript"]}
              />
            ))}
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              For any questions please email me at:
            </h2>
            <a
              href="mailto:seraphim.codes@gmail.com"
              className="text-[#00d8ff] text-xl font-medium hover:underline"
            >
              seraphim.codes@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-[#42446e] dark:text-white font-bold text-lg">
                {"<SS/>"}
              </span>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Link href="https://github.com/seraphimsakiewicz" target="_blank">
                <Github className="w-5 h-5 cursor-pointer hover:text-[#00d8ff]" />
              </Link>
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#00d8ff]" />
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-[#666666] dark:text-[#a7a7a7]">
            <p>
              © {new Date().getFullYear()} Seraphim Sakiewicz. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
