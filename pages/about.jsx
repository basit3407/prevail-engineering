import Bottom from "../components/About/Bottom";
import Middle from "../components/About/Middle";
import Top from "../components/About/Top";
import Slider from "../components/layout/bottom/Slider";
import Wrapper from "../components/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <Top />
      <Middle />
      <Bottom />
      <Slider />
    </Wrapper>
  );
}
