"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PriceData } from "@/alldata/allpricedata";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadContent from "../headelements/headcontent";

//img
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function Pricing() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-pricing-part">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="flip-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Show your pricing plans</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="ns-pricing-box">
          {PriceData.map((item, i) => (
            <div
              className="ns-pricing-item"
              key={i}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-pricing-text-elements">
                <h3>{item.price}</h3>
                <h4>{item.name}</h4>
                <ul>
                  <li>
                    <div>{item.icon[0]}</div>
                    {item.des[0]}
                  </li>
                  <li>
                    <div>{item.icon[0]}</div>
                    {item.des[1]}
                  </li>
                  <li>
                    <div>{item.icon[0]}</div>
                    {item.des[2]}
                  </li>
                  <li>
                    <div>{item.icon[1]}</div>
                    {item.des[3]}
                  </li>
                  <li>
                    <div>{item.icon[1]}</div>
                    {item.des[4]}
                  </li>
                </ul>
                <Link href="#">
                  <div className="ns-pricing-btn">
                    <button>Contact Now</button>
                  </div>
                </Link>
              </div>
              <div className="ns-pricing-hover"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
