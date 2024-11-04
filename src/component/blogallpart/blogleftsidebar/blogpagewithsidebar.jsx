"use client";
import React, { useEffect } from "react";
import Sidebar from "../blog-right-sidebr/sidebar";
import Pagination from "../blog-right-sidebr/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

function BlogPageWithSidebar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pagi-blog">
      <div className="container-sm">
        <div className="row">
          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <Sidebar />
          </div>
          <div
            className="col-lg-8"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPageWithSidebar;
