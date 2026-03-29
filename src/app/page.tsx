import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CodeShowcase from "@/components/CodeShowcase";
import UseCasesSection from "@/components/UseCasesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-indigo-500/30 selection:text-white">
      {/* Texture overlay for premium feel */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <CodeShowcase />
        <UseCasesSection />
      </main>
      <Footer />
    </div>
  );
}
