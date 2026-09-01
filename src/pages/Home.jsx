import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";
import Trails from "../components/home/Trails";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Team from "../components/home/Team";
import Rules from "../components/home/Rules";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <TechStack />
      <HowItWorks />
      <About />
      <Trails />
      <UpcomingEvents />
      <Team />
      <Rules />
      <FAQ />
    </main>
  );
}
