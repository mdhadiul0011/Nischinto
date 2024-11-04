"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { FunfactData } from "@/alldata/funfactalldata";
import AOS from "aos";
import "aos/dist/aos.css";

//img
import video_img from "../../../public/assets/image/funfactimg/video.jpg";

//icon
import { IoMdArrowDroprightCircle } from "react-icons/io";

function FunfactorVideo({ video, setVideo }) {
  useEffect(() => {
    const body = document.body;
    if (video) {
      body.classList.add("no_scroll");
    } else {
      body.classList.remove("no_scroll");
    }
    return () => {
      body.classList.remove("no_scroll");
    };
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="ns-funfact-video">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="ns-countup-funfact"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                {FunfactData.map((item, i) => (
                  <div className="ns-funfact" key={i}>
                    <div className="ns-funfact-img">
                      <Image src={item.img} alt="fucfat_img" priority={true} />
                    </div>
                    <div className="ns-countup">
                      <CountUp
                        end={item.count}
                        duration={5}
                        className="ns-count"
                      />
                    </div>
                    <p>{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-videos">
                <div className="ns-video-box">
                  <Image
                    src={video_img}
                    alt="vedio-block-img"
                    priority={true}
                  />
                  <div className="ns-video-player">
                    <IoMdArrowDroprightCircle
                      className="ns-video-icons"
                      onClick={() => setVideo(!video)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FunfactorVideo;
