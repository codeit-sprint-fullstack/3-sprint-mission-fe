import FeatureCard from "@/components/main/FeatureCard";
import HeroCard from "@/components/main/HeroCard";

export default function Home() {
  return (
    <main className="container">
      <section className="container">
        <HeroCard />
      </section>
      <section>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>
      <section>
        <HeroCard />
      </section>
    </main>
  );
}
