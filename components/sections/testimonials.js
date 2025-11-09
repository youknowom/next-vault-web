"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Users, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    avatar: "AC",
    content: "This CLI saved me hours of setup time. The pre-configured setup with shadcn/ui and Tailwind is exactly what I needed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Engineer",
    avatar: "SJ",
    content: "create-next-vault is a game-changer. It's so fast and the code quality is excellent. My team loves using it for new projects.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Tech Lead",
    avatar: "MR",
    content: "Best Next.js starter I've used. The dark mode support and animations are beautifully implemented. Production-ready from day one.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50 dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            <Users className="h-3 w-3 mr-1.5" />
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Loved by Developers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join thousands of developers who are building amazing projects with
            create-next-vault.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-400/50 mb-4" />
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <Separator className="mb-4" />
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Trusted by 1,000+ developers worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
