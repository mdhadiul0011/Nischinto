"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

//category img
import cate_img1 from "../../../public/assets/image/clientimg/client1.png";
import cate_img2 from "../../../public/assets/image/clientimg/client2.png";
import cate_img3 from "../../../public/assets/image/clientimg/client3.png";
import cate_img4 from "../../../public/assets/image/clientimg/client4.png";
import cate_img5 from "../../../public/assets/image/clientimg/client5.png";

function Client() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  return (
    <section id="ns-client">
      <div className="container-sm">
        <div className="row">
          <div className="ns-client-box">
            <Slider {...settings}>
              <div className="col-lg-3">
                <div className="ns-client-item">
                  <Image src={cate_img1} alt="Client_Img" priority={true} />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="ns-client-item2">
                  <Image src={cate_img2} alt="Client_Img" priority={true} />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="ns-client-item3">
                  <Image src={cate_img3} alt="Client_Img" priority={true} />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="ns-client-item4">
                  <Image src={cate_img4} alt="Client_Img" priority={true} />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="ns-client-item5">
                  <Image src={cate_img5} alt="Client_Img" priority={true} />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
