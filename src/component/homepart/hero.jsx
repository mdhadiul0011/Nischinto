"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// img import
import hero_shape from "../../../public/assets/image/bannerImg//hero-shape.png";
import hero_banner_img from "../../../public/assets/image/bannerImg/banner_img.png";
import hero_banner_img2 from "../../../public/assets/image/bannerImg/banner_img2.png";
import hero_banner_img3 from "../../../public/assets/image/bannerImg/banner_img3.png";

// icon
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

function Hero() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="ns-hero-part">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="ns-hero-left-content"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-hero-content-title">
                <h2 className="title">Take best quality treatment for</h2>
                <div className="animate_text">
                  <span>Crutches.</span>
                  <span>Cardiology.</span>
                  <span>Dentist..</span>
                  <span>Neurology.</span>
                  <span>Crutches..</span>
                </div>
              </div>
              <p>
                The art of medicine consists in amusing the patient while nature
                cures the disease. Treatment without prevention is simply
                unsustainable.
              </p>
              <Link href="#ns-appointment-part">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="appointment-btn"
                >
                  Appointment
                </motion.button>
              </Link>
              <div className="ns-hero-icons">
                <Link href="#">
                  <FaFacebookSquare className="ns-h-icons" />
                </Link>
                <Link href="#">
                  <FaInstagramSquare className="ns-h-icons" />
                </Link>
                <Link href="#">
                  <FaSquarePinterest className="ns-h-icons" />
                </Link>
                <Link href="#">
                  <FaTwitterSquare className="ns-h-icons" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ns-hero-right-img">
              <Slider {...settings}>
                <div>
                  <Image
                    src={hero_banner_img}
                    alt="hero_banner_img"
                    width={650}
                    height={850}
                    priority={true}
                    className="ns-banner-img"
                  />
                </div>
                <div>
                  <Image
                    src={hero_banner_img2}
                    alt="hero_banner_img"
                    width={650}
                    height={850}
                    priority={true}
                    className="ns-banner-img"
                  />
                </div>
                <div>
                  <Image
                    src={hero_banner_img3}
                    alt="hero_banner_img"
                    width={650}
                    height={850}
                    priority={true}
                    className="ns-banner-img"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="ns-hero-shape">
        <Image
          src={hero_shape}
          alt="hero-shape"
          priority={true}
          className="ns-hero-shape-img"
        />
      </div>
    </section>
  );
}

export default Hero;
