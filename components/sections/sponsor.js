"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Github, Coffee, Sparkles } from "lucide-react";
import { useState } from "react";

export function Sponsor() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 via-pink-50/50 to-amber-50 dark:from-slate-900 dark:via-pink-950/30 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800"
          >
            <Sparkles className="h-3 w-3 mr-1.5" />
            Support
          </Badge>
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="inline-block mb-4"
          >
            <Heart className="h-16 w-16 text-red-500 fill-red-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Support the Project
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Love create-next-vault? Consider supporting the project to help it
            grow and improve. Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-500/50 dark:hover:border-amber-400/50 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 text-center relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <Coffee className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                  Buy Me a Coffee
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Show your appreciation with a coffee donation. Every cup helps
                  keep the project going.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://buymeacoffee.com/youknowom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Coffee className="mr-2 h-5 w-5" />
                    Support on Buy Me a Coffee
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500/50 dark:hover:border-blue-400/50 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 text-center relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800">
                    <Github className="h-12 w-12 text-slate-900 dark:text-slate-100" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                  GitHub Sponsors
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Become a sponsor on GitHub and help fund ongoing development
                  and maintenance.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/sponsors/youknowom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Sponsor on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Your support helps us maintain the project, add new features, and
            provide better documentation. Thank you for being part of our
            community! 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
