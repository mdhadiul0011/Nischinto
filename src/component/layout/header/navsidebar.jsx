"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// header img
import Header_logo from "../../../../public/assets/image/headerLogo/nav_logo.png";

//header icons
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function NavSidebar({ setSidebar }) {
  const [textcolor, setTextColor] = useState();
  const [subtextcolor, setSubTextColor] = useState();

  const handleClick = (e) => {
    setTextColor(e.target.id);
  };

  const handleSubNav = (e) => {
    setSubTextColor(e.target.id);
  };
  return (
    <div className="ns-nav-sidebar">
      <div className="ns-cross-btn" onClick={() => setSidebar("")}>
        <RxCross2 />
      </div>
      <div className="ns-nav-logo">
        <Link href="/">
          <Image src={Header_logo} alt="nav_logo" priority={true} />
        </Link>
        <ul className="nav-sidebar-stev">
          <li>
            <a
              href="/"
              id="1"
              key={1}
              onClick={handleClick}
              className={
                textcolor === "1" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              home
            </a>
          </li>
          <li>
            <a
              href="/#ns-about-part"
              id="2"
              key={2}
              onClick={handleClick}
              className={
                textcolor === "2" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              about
            </a>
          </li>
          <li>
            <a
              href="/#ns-department-part"
              id="3"
              key={3}
              onClick={handleClick}
              className={
                textcolor === "3" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              department
            </a>
          </li>
          <li>
            <a
              href="/#ns-special-dr"
              id="4"
              key={4}
              onClick={handleClick}
              className={
                textcolor === "4" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              doctors
            </a>
          </li>
          <li>
            <a
              href="/#ns-gal-part"
              id="5"
              key={5}
              onClick={handleClick}
              className={
                textcolor === "5" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              gallary
            </a>
          </li>
          <li>
            <a
              href="/#ns-pricing-part"
              id="6"
              key={6}
              onClick={handleClick}
              className={
                textcolor === "6" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              pricing
            </a>
          </li>
          <li className="nav-sidebar-children">
            <a
              href="#ns-blog-part"
              id="7"
              key={7}
              onClick={handleClick}
              className={
                textcolor === "7" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              blog
            </a>
            <div className="sub-sidebar-nav">
              <ul className="sub-sidebar-nav-stev">
                <li>
                  <a
                    href="/blog-right-sidebar"
                    id="10"
                    key={10}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "10"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog right sidebar
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-left-sidebar"
                    id="20"
                    key={20}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "20"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog left sidebar
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-no-sidebar"
                    id="30"
                    key={30}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "30"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog no sidebar
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-details-right-sidebar"
                    id="40"
                    key={40}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "40"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog details right sidebar
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-details-left-sidebar"
                    id="50"
                    key={50}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "50"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog details left sidebar
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-details-no-sidebar"
                    id="60"
                    key={60}
                    onClick={handleSubNav}
                    className={
                      subtextcolor === "60"
                        ? "active-sidebar-sub-nav"
                        : "sub-nav-sidebar-item"
                    }
                  >
                    blog details no sidebar
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="/#ns-contact"
              id="8"
              key={8}
              onClick={handleClick}
              className={
                textcolor === "8" ? "active-sidebar-nav" : "nav-sidebar-item"
              }
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="ns-sidebar-icons">
        <Link href="#">
          <FaFacebookSquare className="icons" />
        </Link>
        <Link href="#">
          <FaInstagramSquare className="icons" />
        </Link>
        <Link href="#">
          <FaPinterestSquare className="icons" />
        </Link>
        <Link href="#">
          <FaSquareTwitter className="icons" />
        </Link>
      </div>
    </div>
  );
}

export default NavSidebar;
