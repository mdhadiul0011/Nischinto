"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// img
import cruthes_img from "../../../public/assets/image/departmentImg/crutches - Copy.png";

function DepCruthes() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="ns-dep-cruthes">
      <div className="row">
        <div className="col-lg-6">
          <div
            className="ns-crutehs-left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="ns-cruthes-left-img">
              <Image src={cruthes_img} alt="Crutehs_Image" priority={true} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="ns-crutehs-right"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <h3>
              Welcome to our <span>Cruthes</span>
            </h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              nemo libero debitis vitae sapiente quos.
            </h4>
            <p>
              Oillum abrem deleniti adipisci suscipit dignissimos. remaining
              essentially unchanged. It was popularised in the with the . Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepCruthes;
