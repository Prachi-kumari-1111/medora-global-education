import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Mentor from "../components/Mentor";
import HowItWorks from "../components/HowItWorks";
import VideoShowcase from "../components/VideoShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <VideoShowcase />
      <Mentor />
      <HowItWorks />
    </>
  );
}
