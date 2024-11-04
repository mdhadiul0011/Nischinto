"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import HeadContent from "../headelements/headcontent";
import AOS from "aos";
import "aos/dist/aos.css";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

//newsletter icon
import { BsFillSendFill } from "react-icons/bs";

function Newsletter() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-newsletter">
      <HeadContent>
        <div className="ns-hd-content">
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Subscribe & stay updated</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="ns-newsletter-contact"
              data-aos="flip-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-newsletter-mail-box">
                <input type="email" placeholder="Enter Your Email Address.." />
                <div className="ns-newsletter-icon">
                  <BsFillSendFill className="ns-send-icon" />
                </div>
              </div>
              <h3>(+01) - 234 567 890</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
