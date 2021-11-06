import React from "react";

import Section from "./Section";
import FAQ from "./FAQ";

import faqs from "./../content/faqs.json";

const LowerSiteContent = ({ ...rest }) => {
  return (
    <Section id="lowerSiteContent" {...rest}>
      <FAQ {...faqs} />
    </Section>
  );
};

export default LowerSiteContent;
