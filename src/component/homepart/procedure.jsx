"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import HeadContent from "../headelements/headcontent";
import AOS from "aos";
import "aos/dist/aos.css";

// imgs
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";
import after_img from "../../../public/assets/image/procedureimg/after.jpg";
import before_img from "../../../public/assets/image/procedureimg/before.jpg";

function Procedure() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-procedure-part">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Before and after procedures</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div
          className="ns-procedure"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <ImgComparisonSlider>
            <Image
              slot="first"
              className="slide-img"
              src={before_img}
              alt="procedure-img"
            />
            <Image
              slot="second"
              className="slide-img"
              src={after_img}
              alt="procedure-img"
            />
          </ImgComparisonSlider>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
