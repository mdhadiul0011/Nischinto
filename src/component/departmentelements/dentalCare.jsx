import React from "react";
import Image from "next/image";

// img
import cruthes_img from "../../../public/assets/image/departmentImg/dental-care - Copy.png";

function DentalCare() {
  return (
    <div className="ns-dep-cruthes">
      <div className="row">
        <div className="col-lg-6">
          <div className="ns-crutehs-left">
            <div className="ns-cruthes-left-img">
              <Image src={cruthes_img} alt="Crutehs_Image" priority={true} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ns-crutehs-right">
            <h3>
              Welcome to our <span>Dental Care</span>
            </h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              nemo libero debitis vitae sapiente quos.
            </h4>
            <p>
              Oillum abrem deleniti adipisci suscipit dignissimos. remaining
              essentially unchanged. It was popularised in the with the . Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DentalCare;
