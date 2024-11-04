import React from "react";
import Container from "@/component/container";

//header top icons
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";

function HeaderTop() {
  return (
    <section id="ns-header-top">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-6 col-xs-6 col-sm-10">
            <div className="ns-header-top-left">
              <div className="email-icon">
                <MdOutlineEmail className="top-icons" />
                <Link href="#" className="email-text">
                  info@nischinto.com
                </Link>
              </div>
              <div className="email-icon">
                <FaPhoneVolume className="top-icons" />
                <Link href="#" className="email-text">
                  +01 - 234 567 890
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xs-6 col-sm-2">
            <div className="ns-header-top-right">
              <Link href="#ns-appointment-part" className="appointment_btn">
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop;
