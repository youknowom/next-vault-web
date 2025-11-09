"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Zap, Palette, Box, Moon, Sparkles, Wand2, Code, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js + JavaScript",
    description: "Built with the latest Next.js 14 App Router and JavaScript for modern development.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "TailwindCSS",
    description: "Utility-first CSS framework for rapid UI development with beautiful designs.",
    emoji: "🎨",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Box,
    title: "shadcn/ui",
    description: "High-quality React components built with Radix UI and Tailwind CSS.",
    emoji: "🧱",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Moon,
    title: "Dark/Light Mode",
    description: "Built-in theme switching with next-themes for seamless dark mode support.",
    emoji: "🌓",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Framer Motion",
    description: "Production-ready motion library for React with smooth animations.",
    emoji: "💫",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Wand2,
    title: "ESLint + Prettier",
    description: "Pre-configured code quality tools for consistent and clean codebase.",
    emoji: "🧹",
    color: "from-green-500 to-emerald-500",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(241,245,249,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(241,245,249,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15,23,42,0.5)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A complete toolkit to get your Next.js project up and running in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 dark:hover:border-blue-400/50 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
