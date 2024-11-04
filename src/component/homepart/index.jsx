import React from "react";
import Navigation from "../layout/header/navigation";
import Footer from "../layout/footer/footer";
import Hero from "./hero";
import IconBox from "./iconbox";
import About from "./about";
import Department from "./department";
import Appointment from "./appointment";
import SpecialDoctor from "./specialistdr";
import Gallary from "./gallary";
import Procedure from "./procedure";
import PeoplesComment from "./peoplescomment";
import FunfactorVideo from "./funfactorvideo";
import Pricing from "./pricing";
import FaqPart from "./faq";
import Newsletter from "./newsletter";
import Blog from "./blog";
import Client from "./client";
import Contact from "./contact";

function HomePart({ video, setVideo }) {
  return (
    <div>
      <Navigation />
      <Hero />
      <IconBox />
      <About />
      <Department />
      <Appointment />
      <SpecialDoctor />
      <Gallary />
      <Procedure />
      <PeoplesComment />
      <FunfactorVideo video={video} setVideo={setVideo} />
      <Pricing />
      <FaqPart />
      <Newsletter />
      <Blog />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePart;
