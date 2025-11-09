"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/ui/copy-button";
import { Github, Heart, Rocket, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [command, setCommand] = useState("");
  const [mounted, setMounted] = useState(false);
  const fullCommand = "npx create-next-vault";

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullCommand.length) {
        setCommand(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToInstallation = () => {
    const element = document.getElementById("installation");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = Math.random() * 10 + 15;
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full dark:bg-blue-500/20"
                initial={{
                  x: `${initialX}%`,
                  y: `${initialY}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [
                    `${initialY}%`,
                    `${(initialY + 50) % 100}%`,
                    `${initialY}%`,
                  ],
                  x: [
                    `${initialX}%`,
                    `${(initialX + 30) % 100}%`,
                    `${initialX}%`,
                  ],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
            >
              <Sparkles className="h-3 w-3 mr-1.5" />
              Instantly scaffold a professional Next.js project
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-600">
                Create Next Vault
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            A blazing-fast CLI to launch your Next.js project with Tailwind,
            shadcn/ui, and everything you need to build modern web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={scrollToInstallation}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 h-auto border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <a
                href="https://github.com/youknowom/create-next-vault"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 h-auto border-2 hover:bg-red-50 dark:hover:bg-red-950/20 border-red-200 dark:border-red-800 transition-all duration-300"
            >
              <a
                href="https://buymeacoffee.com/youknowom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="mr-2 h-5 w-5 text-red-500 fill-red-500" />
                Sponsor
              </a>
            </Button>
          </motion.div>

          {/* Terminal code block with copy button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-30 blur transition-opacity duration-300"></div>
              <div className="relative bg-slate-900 dark:bg-slate-800 rounded-lg p-6 shadow-2xl border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <CopyButton text={fullCommand} />
                </div>
                <div className="flex items-center font-mono text-base sm:text-lg">
                  <span className="text-green-400 mr-3 select-none">$</span>
                  <span className="text-slate-100 flex-1">
                    {command}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-0.5 h-5 bg-blue-400 ml-1 align-middle"
                    />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
              <span>Zero Configuration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
              <span>Type Safe</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
