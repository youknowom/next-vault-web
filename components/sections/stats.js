"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Package, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Stats() {
  const [stats, setStats] = useState({
    downloads: 0,
    stars: 0,
    version: "1.0.0",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const statItems = [
    {
      icon: Download,
      label: "Monthly Downloads",
      value: formatNumber(stats.downloads),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Star,
      label: "GitHub Stars",
      value: formatNumber(stats.stars),
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Package,
      label: "npm Version",
      value: `v${stats.version}`,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            <TrendingUp className="h-3 w-3 mr-1.5" />
            Growing Fast
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Trusted by Developers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join thousands of developers building amazing projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className={`backdrop-blur-sm ${item.bgColor} border-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-block p-4 rounded-full ${item.bgColor} mb-4`}
                  >
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
                  >
                    {loading ? (
                      <span className="inline-block w-16 h-12 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></span>
                    ) : (
                      item.value
                    )}
                  </motion.div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    {item.label}
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
