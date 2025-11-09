"use client";

import { Github, Package, Linkedin, Heart, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
              create-next-vault
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                v1.0.0
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              A blazing-fast CLI to launch your Next.js project with Tailwind,
              shadcn/ui, and more. Built for developers who value speed and quality.
            </p>
            <div className="flex items-center gap-4">
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
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.npmjs.com/package/create-next-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="npm"
                >
                  <Package className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/omkar-bagul-18b949269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/youknowom/create-next-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 text-sm transition-colors"
                >
                  Documentation
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/youknowom/create-next-vault/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 text-sm transition-colors"
                >
                  Report Issue
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/youknowom/create-next-vault/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 text-sm transition-colors"
                >
                  Discussions
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Theme
            </h3>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-slate-600 dark:text-slate-400 text-sm">
                Toggle dark/light mode
              </span>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            MIT License © 2025{" "}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="inline-block font-semibold text-slate-900 dark:text-slate-100"
            >
              Omkar Bagul
            </motion.span>
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            for developers
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
