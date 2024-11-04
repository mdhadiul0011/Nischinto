"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DepCruthes from "../departmentelements/depCruthes";
import Xray from "../departmentelements/xray";
import Pulmonary from "../departmentelements/pulmonary";
import DentalCare from "../departmentelements/dentalCare";
import Neurology from "../departmentelements/neurology";
import Cardiology from "../departmentelements/cardiology";
import HeadContent from "../headelements/headcontent";
import AOS from "aos";
import "aos/dist/aos.css";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

// icon elements
import { FaCrutch } from "react-icons/fa6";
import { FaXRay } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";

function Department() {
  const [tabBg, setTabBg] = useState();
  const [view, setView] = useState("cruthes");

  const handleTabClick = (e) => {
    setTabBg(e.target.id);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="ns-department-part">
      <HeadContent>
        <div className="ns-hd-content">
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>our department</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div
          className="ns-dep-tab"
          data-aos="flip-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div
            className={tabBg == "1" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("cruthes")}
          >
            <div className="ns-cruthes" id="1" key={1} onClick={handleTabClick}>
              <FaCrutch className="cruthes" />
              <FaCrutch className="cruthes" />
              <h3>Cruthes</h3>
            </div>
          </div>
          <div
            className={tabBg == "2" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("xray")}
          >
            <div className="ns-cruthes" id="2" key={2} onClick={handleTabClick}>
              <FaXRay className="cruthes2" />
              <h3>X-Ray</h3>
            </div>
          </div>
          <div
            className={tabBg == "3" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("pulmonary")}
          >
            <div className="ns-cruthes" id="3" key={3} onClick={handleTabClick}>
              <FaHeartPulse className="cruthes3" />
              <h3>Pulmonary</h3>
            </div>
          </div>
          <div
            className={tabBg == "4" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("cardiology")}
          >
            <div className="ns-cruthes" id="4" key={4} onClick={handleTabClick}>
              <GiHeartOrgan className="cruthes4" />
              <h3>Cardiology</h3>
            </div>
          </div>
          <div
            className={tabBg == "5" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("dental")}
          >
            <div className="ns-cruthes" id="5" key={5} onClick={handleTabClick}>
              <TbDental className="cruthes5" />
              <h3>Dental Care</h3>
            </div>
          </div>
          <div
            className={tabBg == "6" ? "activeTab" : "ns-tabs"}
            onClick={() => setView("neurology")}
          >
            <div className="ns-cruthes" id="6" key={6} onClick={handleTabClick}>
              <GiBrain className="cruthes6" />
              <h3>Neurology</h3>
            </div>
          </div>
        </div>
        <div>
          {view === "cruthes" ? (
            <DepCruthes setView={setView} />
          ) : view === "xray" ? (
            <Xray />
          ) : view === "pulmonary" ? (
            <Pulmonary />
          ) : view === "dental" ? (
            <DentalCare />
          ) : view === "neurology" ? (
            <Neurology />
          ) : view === "cardiology" ? (
            <Cardiology />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Department;
