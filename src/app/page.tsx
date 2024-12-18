"use client";

import { motion } from "framer-motion";
import ScrollSection from "@/components/ScrollSection";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaDownload,
  FaDatabase,
  FaCloud,
  FaCode,
  FaQrcode,
} from "react-icons/fa";
import { SiDotnet, SiDocker } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Page() {
  const skills = [
    { name: ".NET Core", icon: <SiDotnet className="w-6 h-6 mb-2" /> },
    { name: "C#", icon: <TbBrandCSharp className="w-6 h-6 mb-2" /> },
    { name: "SQL Server", icon: <FaDatabase className="w-6 h-6 mb-2" /> },
    { name: "Azure DevOps", icon: <FaCode className="w-6 h-6 mb-2" /> },
    { name: "Docker", icon: <SiDocker className="w-6 h-6 mb-2" /> },
    { name: "Azure Cloud", icon: <FaCloud className="w-6 h-6 mb-2" /> },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahmed Atef Hegazy',
    jobTitle: 'Backend Developer',
    url: 'https://ahmedatefsyhh.github.io/portfolio',
    sameAs: [
      'https://www.linkedin.com/in/ahmed-atef-hegazy/',
      'https://github.com/ahmedatefsyhh'
    ],
    knowsAbout: ['.NET Core', 'C#', 'SQL Server', 'Azure DevOps', 'Docker', 'Azure Cloud'],
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company Name'
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-white dark:via-gray-100 dark:to-gray-200 text-white dark:text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <ThemeToggle />

        {/* Hero Section */}
        <ScrollSection>
          <motion.section
            className="mb-24 relative"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-[100px] opacity-20 dark:opacity-10" />

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-md opacity-75" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <Image
                    src="./ahmed.jpg"
                    alt="Ahmed Atef Hegazy"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </motion.div>

              {/* Name and Title */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Ahmed Atef Hegazy
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-400 dark:text-gray-600 font-light mb-6">
                  Backend Developer
                </h2>

                {/* Social Links and CV Button */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  variants={staggerChildrenVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Existing social links */}
                  <motion.a
                    href="https://www.linkedin.com/in/ahmed-atef-hegazy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/30 dark:bg-white/30 rounded-full backdrop-blur-lg
                             border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                             hover:border-purple-500/50 transition-all duration-300
                             text-purple-400 dark:text-purple-600"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/+201156050266"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/30 dark:bg-white/30 rounded-full backdrop-blur-lg
                             border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                             hover:border-purple-500/50 transition-all duration-300
                             text-purple-400 dark:text-purple-600"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/ahmedatefsyhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/30 dark:bg-white/30 rounded-full backdrop-blur-lg
                             border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                             hover:border-purple-500/50 transition-all duration-300
                             text-purple-400 dark:text-purple-600"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>

                  {/* Download CV Button */}
                  <motion.a
                    href="/Ahmed-Atef-CV.pdf"
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full
                             backdrop-blur-lg border border-purple-500/50 shadow-lg
                             hover:bg-purple-500/30 transition-all duration-300
                             text-purple-400 dark:text-purple-600"
                  >
                    <FaDownload className="w-4 h-4" />
                    <span className="text-sm font-medium">Download CV</span>
                  </motion.a>

                  {/* QR Code Button */}
                  <motion.button
                    onClick={() =>
                      window.open(
                        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                          "https://ahmedatefsyhh.github.io/portfolio"
                        )}`,
                        "_blank"
                      )
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/30 dark:bg-white/30 rounded-full backdrop-blur-lg
                             border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                             hover:border-purple-500/50 transition-all duration-300
                             text-purple-400 dark:text-purple-600"
                    aria-label="Show QR Code"
                  >
                    <FaQrcode className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </ScrollSection>

        {/* About Me Section */}
        <ScrollSection>
          <motion.section
            className="mb-24 relative"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 dark:bg-white/30 p-6 sm:p-8 rounded-xl backdrop-blur-lg 
                        border border-gray-700/50 dark:border-gray-200/50 shadow-xl"
            >
              <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
                I am a dedicated .NET Backend Developer with expertise in
                building robust and scalable enterprise applications. My focus
                is on developing high-performance APIs, microservices, and
                database solutions using Microsoft&apos;s technology stack. I
                have a strong foundation in C#, ASP.NET Core, and SQL Server,
                complemented by experience with cloud technologies and modern
                development practices.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-400 dark:text-purple-600 mb-2">
                    Education
                  </h4>
                  <p className="text-gray-300 dark:text-gray-600">
                    Your University
                  </p>
                  <p className="text-sm text-gray-400">
                    Computer Science • 2018-2022
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 dark:text-purple-600 mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300 dark:text-gray-600">
                    Cairo, Egypt
                  </p>
                  <p className="text-sm text-gray-400">Open to Remote Work</p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </ScrollSection>

        {/* Experience Section */}
        <ScrollSection>
          <motion.section
            className="mb-24 relative"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Experience
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/30 dark:bg-white/30 p-6 sm:p-8 rounded-xl backdrop-blur-lg border border-gray-700/50 dark:border-gray-200/50 shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-2">Company Name</h4>
                <p className="text-purple-400 dark:text-purple-600 mb-4">
                  .NET Backend Developer • 2022 - Present
                </p>
                <p className="text-gray-300 dark:text-gray-600">
                  • Developed and maintained scalable RESTful APIs using ASP.NET
                  Core and Entity Framework Core
                  <br />
                  • Designed and optimized SQL Server databases, improving query
                  performance by 40%
                  <br />
                  • Implemented microservices architecture using Docker
                  containers and Azure Kubernetes Service
                  <br />• Collaborated with teams using Azure DevOps for CI/CD
                  pipelines and agile development
                </p>
              </motion.div>
            </div>
          </motion.section>
        </ScrollSection>

        {/* Skills Section */}
        <ScrollSection>
          <motion.section
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Technical Skills
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerChildrenVariants}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUpVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  }}
                  className="bg-gray-800/30 dark:bg-white/30 p-6 rounded-xl text-center backdrop-blur-lg
                            border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                            hover:border-purple-500/50 transition-all duration-300
                            flex flex-col items-center justify-center"
                >
                  {skill.icon}
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </ScrollSection>

        {/* Projects Section */}
        <ScrollSection>
          <motion.section
            className="mt-24"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Featured Projects
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/30 dark:bg-white/30 p-6 sm:p-8 rounded-xl backdrop-blur-lg 
                          border border-gray-700/50 dark:border-gray-200/50 shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-2">
                  E-Commerce Microservices
                </h4>
                <p className="text-purple-400 dark:text-purple-600 mb-4">
                  .NET Core • SQL Server • Azure
                </p>
                <p className="text-gray-300 dark:text-gray-600 mb-4">
                  A scalable e-commerce platform built with microservices
                  architecture using .NET Core. Features include user
                  authentication, product catalog, shopping cart, and order
                  processing. Implemented using Domain-Driven Design principles
                  and CQRS pattern.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-sm px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 
                             hover:bg-purple-500/30 transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-sm px-4 py-2 rounded-lg bg-gray-800/30 text-gray-300 
                             hover:bg-gray-800/50 transition-all duration-300"
                  >
                    GitHub Repo
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </ScrollSection>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
