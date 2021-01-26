//Load all the Page components
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import SliderSection from "./SliderSection";
import Values from "./Values";

export default function Home(props) {
  return (
    <>
      <SliderSection {...props} />
      <AboutSection {...props} />
      <PortfolioSection {...props} />
      <Values {...props} />
    </>
  );
}
