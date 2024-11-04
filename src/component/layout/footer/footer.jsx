import React from "react";
import Image from "next/image";
import Link from "next/link";

// footer img
import footer_logo from "../../../../public/assets/image/footerImg//footer-logo - Copy.png";

// icon
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { departmentsData, usefulLinks } from "@/alldata/footer";

function Footer() {
  return (
    <footer id="ns-footer-part">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-3 col-xs-12 col-sm-6">
            <div className="ns-footer-left-elements">
              <div className="ns-footer-logo">
                <Image src={footer_logo} alt="footer-log" priority={true} />
              </div>
              <p>
                Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp
                incididunt ut labore. Lorem Ipsum is simply dummy.
              </p>
              <div className="ns-footer-icon">
                <Link href="#">
                  <FaFacebookSquare className="ns-f-icons" />
                </Link>
                <Link href="#">
                  <FaInstagramSquare className="ns-f-icons" />
                </Link>
                <Link href="#">
                  <FaSquarePinterest className="ns-f-icons" />
                </Link>
                <Link href="#">
                  <FaTwitterSquare className="ns-f-icons" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-sm-6">
            <div className="ns-footer-links">
              <h3>Usefull Links</h3>
              {usefulLinks.map((item, i) => (
                <ul key={i}>
                  <li>
                    <a href="#">{item.items}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-sm-6">
            <div className="ns-footer-links">
              <h3>Departments</h3>
              {departmentsData.map((item, i) => (
                <ul key={i}>
                  <li>
                    <a href="#">{item.items}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-sm-6">
            <div className="ns-footer-links">
              <h3>Contacts</h3>
              <p>1223 Fulton Street San Diego CA 941-23 USA</p>
              <p>nischinto@gmail.com</p>
              <p>(+01) - 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ns-copyright">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-6 col-xs-10">
              <div className="ns-copyright-text">
                <p>Copyright 2024. Design by Hadiul</p>
              </div>
            </div>
            <div className="col-lg-6 col-xs-2">
              <Link href="#ns-header">
                <div className="ns-copyright-icon">
                  <IoIosArrowDropupCircle className="copyright-icons" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
