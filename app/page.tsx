import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="overflow-hidden bg-s1">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  );
}
