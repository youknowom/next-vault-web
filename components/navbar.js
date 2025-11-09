"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToInstallation = () => {
    const element = document.getElementById("installation");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              create-next-vault
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              v1.0.0
            </Badge>
          </motion.button>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={scrollToInstallation}
              className="hidden sm:inline-flex"
            >
              Get Started
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/youknowom/create-next-vault"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
