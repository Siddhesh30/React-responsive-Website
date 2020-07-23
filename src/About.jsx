import React from "react";
import web from "../src/images/web1.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contant Now"
      />
    </>
  );
};

export default About;
