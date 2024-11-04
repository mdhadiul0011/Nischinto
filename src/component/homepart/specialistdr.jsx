"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import HeadContent from "../headelements/headcontent";
import Link from "next/link";
import SampleNextArrow from "../nextarrow";
import SamplePrevArrow from "../prevarrow";
import AOS from "aos";
import "aos/dist/aos.css";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";
import special_dr1 from "../../../public/assets/image/specialDoctor/member1.jpg";
import special_dr2 from "../../../public/assets/image/specialDoctor/member2.jpg";
import special_dr3 from "../../../public/assets/image/specialDoctor/member3.jpg";
import special_dr4 from "../../../public/assets/image/specialDoctor/member4.jpg";

// icons
import { LiaLinkSolid } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function SpecialDoctor() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-special-dr">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="flip-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>meet our specialist</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <Slider {...settings}>
          <div
            className="ns-dr-items"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="ns-special-dr-item">
              <div className="ns-special-dr-img">
                <Image
                  src={special_dr1}
                  alt="Special-Doctor"
                  priority={true}
                  className="ns-dr-img"
                />
                <div className="ns-dr-overflow">
                  <div className="ns-overflow-icons">
                    <Link href="#">
                      <FaFacebookSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaPinterestSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaTwitterSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <AiOutlineGlobal className="ns-dr-icon" />
                    </Link>
                  </div>
                </div>
                <Link href="/doctor-profile">
                  <div className="ns-dr-icons">
                    <LiaLinkSolid className="dr-icons" />
                  </div>
                </Link>
              </div>
              <h3>Dr. Philip Veiley</h3>
              <p>Urology</p>
            </div>
          </div>
          <div
            className="ns-dr-items"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="ns-special-dr-item">
              <div className="ns-special-dr-img">
                <Image
                  src={special_dr2}
                  alt="Special-Doctor"
                  priority={true}
                  className="ns-dr-img"
                />

                <div className="ns-dr-overflow">
                  <div className="ns-overflow-icons">
                    <Link href="#">
                      <FaFacebookSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaPinterestSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaTwitterSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <AiOutlineGlobal className="ns-dr-icon" />
                    </Link>
                  </div>
                </div>
                <Link href="/doctor-profile">
                  <div className="ns-dr-icons">
                    <LiaLinkSolid className="dr-icons" />
                  </div>
                </Link>
              </div>
              <h3>Dr. Vera Hasson</h3>
              <p>Cardiology</p>
            </div>
          </div>
          <div
            className="ns-dr-items"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="ns-special-dr-item">
              <div className="ns-special-dr-img">
                <Image
                  src={special_dr3}
                  alt="Special-Doctor"
                  priority={true}
                  className="ns-dr-img"
                />
                <div className="ns-dr-overflow">
                  <div className="ns-overflow-icons">
                    <Link href="#">
                      <FaFacebookSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaPinterestSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaTwitterSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <AiOutlineGlobal className="ns-dr-icon" />
                    </Link>
                  </div>
                </div>
                <Link href="/doctor-profile">
                  <div className="ns-dr-icons">
                    <LiaLinkSolid className="dr-icons" />
                  </div>
                </Link>
              </div>
              <h3>Dr. Mathew Hill</h3>
              <p>Neurology</p>
            </div>
          </div>
          <div
            className="ns-dr-items"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="ns-special-dr-item">
              <div className="ns-special-dr-img">
                <Image
                  src={special_dr4}
                  alt="Special-Doctor"
                  priority={true}
                  className="ns-dr-img"
                />
                <div className="ns-dr-overflow">
                  <div className="ns-overflow-icons">
                    <Link href="#">
                      <FaFacebookSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaPinterestSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaTwitterSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <AiOutlineGlobal className="ns-dr-icon" />
                    </Link>
                  </div>
                </div>
                <Link href="/doctor-profile">
                  <div className="ns-dr-icons">
                    <LiaLinkSolid className="dr-icons" />
                  </div>
                </Link>
              </div>
              <h3>Dr. Jenette Hoff</h3>
              <p>Sergery</p>
            </div>
          </div>
          <div className="ns-dr-items">
            <div className="ns-special-dr-item">
              <div className="ns-special-dr-img">
                <Image
                  src={special_dr2}
                  alt="Special-Doctor"
                  priority={true}
                  className="ns-dr-img"
                />

                <div className="ns-dr-overflow">
                  <div className="ns-overflow-icons">
                    <Link href="#">
                      <FaFacebookSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaPinterestSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <FaTwitterSquare className="ns-dr-icon" />
                    </Link>
                    <Link href="#">
                      <AiOutlineGlobal className="ns-dr-icon" />
                    </Link>
                  </div>
                </div>
                <Link href="/doctor-profile">
                  <div className="ns-dr-icons">
                    <LiaLinkSolid className="dr-icons" />
                  </div>
                </Link>
              </div>
              <h3>Dr. Mathew Hill</h3>
              <p>Neurosurgery</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default SpecialDoctor;
