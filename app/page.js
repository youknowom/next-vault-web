import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { CLIDemo } from "@/components/sections/cli-demo";
import { Testimonials } from "@/components/sections/testimonials";
import { Installation } from "@/components/sections/installation";
import { Sponsor } from "@/components/sections/sponsor";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CLIDemo />
      <Testimonials />
      <Installation />
      <Sponsor />
      <Footer />
    </main>
  );
}
