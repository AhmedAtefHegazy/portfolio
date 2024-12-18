"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-xl bg-gray-800/30 dark:bg-white/30 
                backdrop-blur-lg border border-gray-700/50 dark:border-gray-200/50 
                shadow-lg hover:border-purple-500/50 transition-all duration-300
                text-yellow-400 dark:text-purple-600 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 180,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <RiMoonClearLine className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -180 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <RiSunLine className="w-6 h-6" />
        </motion.div>
      </div>
    </motion.button>
  );
}
