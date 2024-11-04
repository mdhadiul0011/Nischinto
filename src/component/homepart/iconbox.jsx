"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { iconboxdata } from "@/alldata/iconalldata";
import AOS from "aos";
import "aos/dist/aos.css";

function IconBox() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-icon-box">
      <div className="container-sm">
        <div className="row">
          {iconboxdata.map((item, i) => (
            <div className="col-lg-4 col-md-4" key={i}>
              <div
                className="ns-cards"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <div className="ns-card-content">
                  <div className="ns-icon-card-img">
                    <Image
                      src={item.img}
                      alt="doctors-img"
                      priority={true}
                      className="ns-icon-img"
                    />
                  </div>
                  <h3>{item.headline}</h3>
                  <p>{item.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IconBox;
