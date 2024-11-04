"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AllImg from "../GallaryElements/AllImg";
import CardiologyImg from "../GallaryElements/cardiologyImg";
import UrologyImg from "../GallaryElements/UrologyImg";
import PulmonaryImg from "../GallaryElements/pulmonaryImg";
import NeurologyImsg from "../GallaryElements/NeurologyImsg";
import TraumatologyImg from "../GallaryElements/traumatologyImg";
import HeadContent from "../headelements/headcontent";
import AOS from "aos";
import "aos/dist/aos.css";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function Gallary() {
  const [tabBg, setTabBg] = useState();
  const [viewGal, setViewGal] = useState("allgallary");

  const handleTabClick = (e) => {
    setTabBg(e.target.id);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-gal-part">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>View our gallery</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <ul
          className="ns-gal-tab"
          data-aos="flip-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <li onClick={() => setViewGal("allgallary")}>
            <a
              className={tabBg == "1" ? "galactive" : "ns-tabs"}
              id="1"
              key={1}
              onClick={handleTabClick}
            >
              All
            </a>
          </li>
          <li onClick={() => setViewGal("cardiology")}>
            <a
              className={tabBg === "2" ? "galactive" : "ns-tabs"}
              id="2"
              key={2}
              onClick={handleTabClick}
            >
              Cardiology
            </a>
          </li>
          <li onClick={() => setViewGal("urology")}>
            <a
              className={tabBg === "3" ? "galactive" : "ns-tabs"}
              id="3"
              key={3}
              onClick={handleTabClick}
            >
              Urology
            </a>
          </li>
          <li onClick={() => setViewGal("pulmonary")}>
            <a
              className={tabBg === "4" ? "galactive" : "ns-tabs"}
              id="4"
              key={4}
              onClick={handleTabClick}
            >
              Pulmonary
            </a>
          </li>
          <li onClick={() => setViewGal("neurology")}>
            <a
              className={tabBg === "5" ? "galactive" : "ns-tabs"}
              id="5"
              key={5}
              onClick={handleTabClick}
            >
              Neurology
            </a>
          </li>
          <li onClick={() => setViewGal("traumatology")}>
            <a
              className={tabBg === "6" ? "galactive" : "ns-tabs"}
              id="6"
              key={6}
              onClick={handleTabClick}
            >
              Traumatology
            </a>
          </li>
        </ul>
        <div className="gal-img">
          {viewGal === "allgallary" ? (
            <AllImg />
          ) : viewGal === "cardiology" ? (
            <CardiologyImg />
          ) : viewGal === "urology" ? (
            <UrologyImg />
          ) : viewGal === "pulmonary" ? (
            <PulmonaryImg />
          ) : viewGal === "neurology" ? (
            <NeurologyImsg />
          ) : viewGal === "traumatology" ? (
            <TraumatologyImg />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Gallary;
