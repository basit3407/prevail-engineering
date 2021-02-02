import CoreSpecilizations from "../components/Services/coreSpecilizations";
import Feasibility from "../components/Services/Feasibility";
import Top from "../components/Services/Top";
import Values from "../components/Services/values";
import WhatWeOffer from "../components/Services/whatWeOffer";
import Wrapper from "../components/Wrapper";

export default function Services() {
  return (
    <Wrapper>
      <Top />
      <WhatWeOffer />
      <CoreSpecilizations />
      <Values />
      <Feasibility />
    </Wrapper>
  );
}
