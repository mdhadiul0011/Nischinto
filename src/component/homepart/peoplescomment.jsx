"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import HeadContent from "../headelements/headcontent";
import SampleNextArrow from "../nextarrow";
import SamplePrevArrow from "../prevarrow";
import AOS from "aos";
import "aos/dist/aos.css";

// imgs
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";
import avatar_img1 from "../../../public/assets/image/commentImg/avatar2 - Copy.png";
import avatar_img2 from "../../../public/assets/image/commentImg/avatar3.png";
import avatar_img3 from "../../../public/assets/image/commentImg/avatar4.png";

// icons
import { FaQuoteRight } from "react-icons/fa";

function PeoplesComment() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="ns-people-cmnt">
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
          <h3>What people say?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="ns-cmnt-list">
          <Slider {...settings}>
            <div
              className="ns-cmnt-item"
              data-aos="flip-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-cmnt-img">
                <Image src={avatar_img1} alt="comment_img" priority={true} />
              </div>
              <div className="ns-people-icons">
                <FaQuoteRight className="ns-people-icon" />
              </div>
              <h3>Ralph Jones</h3>
              <h5>UX designer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                libero facilis voluptatem dicta illo deleniti odio explicabo
                voluptatibus?
              </p>
            </div>
            <div
              className="ns-cmnt-item"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-cmnt-img">
                <Image src={avatar_img3} alt="comment_img" priority={true} />
              </div>
              <div className="ns-people-icons">
                <FaQuoteRight className="ns-people-icon" />
              </div>
              <h3>David Baer</h3>
              <h5>Executive Manager</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                libero facilis voluptatem dicta illo deleniti odio explicabo
                voluptatibus?
              </p>
            </div>
            <div
              className="ns-cmnt-item"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="ns-cmnt-img">
                <Image src={avatar_img2} alt="comment_img" priority={true} />
              </div>
              <div className="ns-people-icons">
                <FaQuoteRight className="ns-people-icon" />
              </div>
              <h3>Franchis Jara</h3>
              <h5>Biographer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                libero facilis voluptatem dicta illo deleniti odio explicabo
                voluptatibus?
              </p>
            </div>
            <div className="ns-cmnt-item">
              <div className="ns-cmnt-img">
                <Image src={avatar_img3} alt="comment_img" priority={true} />
              </div>
              <div className="ns-people-icons">
                <FaQuoteRight className="ns-people-icon" />
              </div>
              <h3>David Baer</h3>
              <h5>Executive Manager</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                libero facilis voluptatem dicta illo deleniti odio explicabo
                voluptatibus?
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PeoplesComment;
