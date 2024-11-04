"use client";
import React, { useEffect } from "react";
import HeadContent from "../headelements/headcontent";
import Image from "next/image";
import Link from "next/link";
import { BlogData } from "@/alldata/blogdata";
import AOS from "aos";
import "aos/dist/aos.css";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="ns-blog-part">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Latest News</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="row">
          {BlogData.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="ns-blog-box"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <div className="ns-blog-item">
                  <div className="ns-blog-img">
                    <Image
                      src={item.img}
                      alt="blog-img"
                      className="blog-img"
                      priority={true}
                    />
                  </div>
                  <div className="ns-blog-text">
                    <h3>{item.headline}</h3>
                    <span>{item.postby}</span>
                    <p>{item.des}</p>
                    <Link href="/blog-details-right-sidebar">
                      <button className="ns-blog-button">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
