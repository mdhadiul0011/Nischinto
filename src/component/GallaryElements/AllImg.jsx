"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// imgs
import gal_img1 from "../../../public/assets/image/gallaryImg/project1_lg.jpg";
import gal_img2 from "../../../public/assets/image/gallaryImg/project2.jpg";
import gal_img3 from "../../../public/assets/image/gallaryImg/project3.jpg";
import gal_img4 from "../../../public/assets/image/gallaryImg/project4.jpg";
import gal_img5 from "../../../public/assets/image/gallaryImg/project5.jpg";
import gal_img6 from "../../../public/assets/image/gallaryImg/project6.jpg";
import gal_img7 from "../../../public/assets/image/gallaryImg/project7.jpg";

function AllImg() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="ns-gal-all-img"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <div className="img-colomn">
        <Image
          src={gal_img1}
          alt="Gallary_Image"
          priority={true}
          className="all-img"
        />
        <Image
          src={gal_img4}
          alt="Gallary_Image"
          priority={true}
          className="all-img"
        />
      </div>

      <div className="img-colomn">
        <Image
          src={gal_img2}
          alt="Gallary_Image"
          className="all-img"
          priority={true}
        />
        <Image
          src={gal_img5}
          alt="Gallary_Image"
          className="all-img"
          priority={true}
        />
        <Image
          src={gal_img7}
          alt="Gallary_Image"
          className="all-img"
          priority={true}
        />
      </div>

      <div className="img-colomn">
        <Image
          src={gal_img3}
          alt="Gallary_Image"
          className="all-img"
          priority={true}
        />
        <Image
          src={gal_img6}
          alt="Gallary_Image"
          className="all-img"
          priority={true}
        />
      </div>
    </div>
  );
}

export default AllImg;
