"use client";
import React, { useEffect } from "react";
import Sidebar from './sidebar'
import Pagination from './pagination'
import AOS from "aos";
import "aos/dist/aos.css";

function PageWithSidebar() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='pagi-blog'>
      <div className="container-sm">
        <div className="row">
            <div className="col-lg-8" 
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
              <Pagination/>
            </div>
            <div className="col-lg-4" 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
              <Sidebar/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageWithSidebar
