//Load all the Page components
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/AboutSection";
import SliderSection from "../components/Home/SliderSection";
import Values from "../components/Home/Values";

export default function Home() {
  return (
    <>
      <SliderSection />
      <AboutSection />
      <PortfolioSection />
      <Values />
    </>
  );
}
