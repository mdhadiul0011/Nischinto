"use client";
import React, { useEffect } from "react";
import Sidebar from "../blog-right-sidebr/sidebar";
import BlogDetails from "./blogdetails";
import AOS from "aos";
import "aos/dist/aos.css";

function Blogdtlswithsidebar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="blog-details-sidebar">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetails />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogdtlswithsidebar;
