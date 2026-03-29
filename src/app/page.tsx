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
    <div className="relative min-h-screen bg-black selection:bg-white/20 selection:text-white">
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
