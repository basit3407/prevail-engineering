import { useEffect } from "react";
//Load propTypes
import PropTypes from "prop-types";
//Load all the Page components
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import SliderSection from "./SliderSection";
import Values from "./Values";

export default function Home(props) {
  const { animation, setAnimation } = props,
    properties = { animation: animation };
  //Load animation at first page Load
  useEffect(() => {
    setAnimation(true);
  }, [setAnimation]);

  return (
    <>
      <SliderSection {...properties} />
      <AboutSection {...properties} />
      <PortfolioSection {...properties} />
      <Values {...properties} />
    </>
  );
}

Home.propTypes = {
  animation: PropTypes.bool.isRequired,
  setAnimation: PropTypes.func.isRequired,
};
