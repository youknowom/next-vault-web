"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const cliSteps = [
  { text: "🚀 NEXT VAULT", delay: 500, color: "text-blue-400" },
  { text: "", delay: 300 },
  { text: "📁 Project name: my-next-app", delay: 800, color: "text-green-400" },
  { text: "🧱 Add shadcn/ui? (Y/n) Y", delay: 600, color: "text-cyan-400" },
  { text: "🎨 Add TailwindCSS? (Y/n) Y", delay: 600, color: "text-purple-400" },
  { text: "✅ Done! cd my-next-app && npm run dev", delay: 1000, color: "text-green-400" },
];

export function CLIDemo() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep >= cliSteps.length) {
      setIsComplete(true);
      return;
    }

    const step = cliSteps[currentStep];
    const timer = setTimeout(() => {
      if (step.text) {
        setDisplayedLines((prev) => [...prev, { text: step.text, color: step.color || "text-green-400" }]);
      }
      setCurrentStep((prev) => prev + 1);
    }, step.delay);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const resetDemo = () => {
    setDisplayedLines([]);
    setCurrentStep(0);
    setIsComplete(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            Demo
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Watch how quickly you can set up a new Next.js project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-slate-900 dark:bg-slate-800 border-slate-700 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                Terminal
              </div>
              {isComplete && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={resetDemo}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Reset
                </motion.button>
              )}
            </div>
            <div className="p-6 font-mono text-sm space-y-2 min-h-[200px]">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={line.color}
                >
                  {line.text}
                </motion.div>
              ))}
              {currentStep < cliSteps.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-green-400 inline-block w-2 h-4 bg-green-400 ml-1"
                />
              )}
              {isComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-slate-700 text-slate-400 text-xs"
                >
                  ✨ Your project is ready! Start building amazing things.
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
