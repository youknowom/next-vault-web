"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "@/components/ui/copy-button";
import { CheckCircle2, ArrowRight, Terminal } from "lucide-react";

const installationSteps = [
  {
    step: 1,
    title: "Run the command",
    description: "Execute the create-next-vault CLI in your terminal",
    code: "npx create-next-vault",
    icon: Terminal,
  },
  {
    step: 2,
    title: "Follow the prompts",
    description: "Answer a few simple questions to configure your project",
    code: `Project name: my-next-app
Add shadcn/ui? (Y/n) Y
Add TailwindCSS? (Y/n) Y`,
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "Start developing",
    description: "Navigate to your project and start the development server",
    code: `cd my-next-app
npm run dev`,
    icon: ArrowRight,
  },
];

export function Installation() {
  return (
    <section id="installation" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            Installation
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Get Started in Seconds
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Three simple steps to launch your Next.js project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {installationSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1 flex items-center gap-2">
                          <item.icon className="h-5 w-5" />
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <div className="relative group/code">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover/code:opacity-20 blur transition-opacity duration-300"></div>
                    <div className="relative bg-slate-900 dark:bg-slate-800 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Terminal</span>
                        <CopyButton text={item.code} />
                      </div>
                      <pre className="whitespace-pre-wrap">{item.code}</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to build something amazing?
              </h3>
              <p className="text-blue-100 mb-6">
                Get started with create-next-vault today and launch your Next.js
                project in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                  onClick={() => {
                    navigator.clipboard.writeText("npx create-next-vault");
                  }}
                >
                  Copy Command
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a
                    href="https://github.com/youknowom/create-next-vault"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
