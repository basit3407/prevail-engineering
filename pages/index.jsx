//Load all the Page components
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import SliderSection from "../components/Home/SliderSection";
import Values from "../components/Home/Values";
import Slider from "../components/layout/bottom/Slider";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SliderSection />
      <AboutSection />
      <PortfolioSection />
      <Values />
      <Slider />
    </Wrapper>
  );
}
