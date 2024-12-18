"use client";

import { motion } from "framer-motion";
import ScrollSection from "@/components/ScrollSection";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-white dark:via-gray-100 dark:to-gray-200 text-white dark:text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <ThemeToggle />

        {/* Hero Section */}
        <ScrollSection>
          <motion.section className="mb-24 relative">
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
                    src="/ahmed.jpg"
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

                {/* Social Links */}
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>
          </motion.section>
        </ScrollSection>

        {/* Experience Section */}
        <ScrollSection>
          <section className="mb-24 relative">
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
                  Position • 2020 - Present
                </p>
                <p className="text-gray-300 dark:text-gray-600">
                  Description of your role and achievements
                </p>
              </motion.div>
            </div>
          </section>
        </ScrollSection>

        {/* Skills Section */}
        <ScrollSection>
          <section>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["React", "TypeScript", "Node.js"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  }}
                  className="bg-gray-800/30 dark:bg-white/30 p-6 rounded-xl text-center backdrop-blur-lg
                            border border-gray-700/50 dark:border-gray-200/50 shadow-lg
                            hover:border-purple-500/50 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollSection>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>
      </div>
    </main>
  );
}
