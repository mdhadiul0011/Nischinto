'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadContent from "../headelements/headcontent";

// img elements
import about_img from "../../../public/assets/image/aboutimg/about.png";
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";
import { LuPhoneCall } from "react-icons/lu";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-about-part">
      <HeadContent>
        <div className="ns-hd-content">
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>who we are</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="ns-about-left"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-about-left-headline">
                <h3>
                  A hospital is a health care institution providing patient
                  treatment with specialized medical
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid unt labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamc
                  laboris nisi ut aliquip. Commodo consequat.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid unt labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamc
                  laboris nisi ut aliquip. Commodo consequat. Sed do eiusmod
                  tempor incidid unt labore et dolore magna aliqua.
                </p>
              </div>
              <div className="ns-about-dc-id">
                <div className="ns-about-img">
                  <Image src={about_img} alt="about-img" priority={true} />
                </div>
                <div className="ns-dc-id">
                  <h4>David Ambrose</h4>
                  <p>Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="ns-about-right"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-about-timetable">
                <h3>Weekly timetable</h3>
                <ul>
                  <li>
                    <p>Monday</p>
                    <p>8:00am–7:00pm</p>
                  </li>
                  <li>
                    <p>Tuseday</p>
                    <p>9:00am–6:00pm</p>
                  </li>
                  <li>
                    <p>Wednesday</p>
                    <p>9:00am–6:00pm</p>
                  </li>
                  <li>
                    <p>Thursday</p>
                    <p>8:00am–7:00pm</p>
                  </li>
                  <li>
                    <p>Friday</p>
                    <p>8:00am–7:00pm</p>
                  </li>
                  <li>
                    <p>Saturday</p>
                    <p>9:00am–5:00pm</p>
                  </li>
                  <li>
                    <p>Sunday</p>
                    <p>9:00am–3:00pm</p>
                  </li>
                </ul>
                <div className="ns-about-contact">
                  <div>
                    <LuPhoneCall className="ns-phone" />
                  </div>
                  <div>
                    <p>Call Now</p>
                    <h3>(+01) - 234 567 890</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
