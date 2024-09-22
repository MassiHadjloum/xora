import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden bg-s1">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
