"use client";
import React, { useEffect, useState } from "react";
import HeaderTop from "./headertop";
import Link from "next/link";
import Image from "next/image";
import NavSidebar from "./navsidebar";

// header img
import Header_logo from "../../../../public/assets/image/headerLogo/nav_logo.png";

//header icon
import { HiBars3BottomRight } from "react-icons/hi2";

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [textcolor, setTextColor] = useState();
  const [subtextcolor, setSubTextColor] = useState();
  const [sidebar, setSidebar] = useState();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setActiveMenu(true);
      } else {
        setActiveMenu(false);
      }
    });
  }, []);

  const handleClick = (e) => {
    setTextColor(e.target.id);
  };

  const handleSubNav = (e) => {
    setSubTextColor(e.target.id);
  };
  return (
    <header id="ns-header">
      <HeaderTop />
      <div className={activeMenu ? "active-menu" : "menu-bar"}>
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-4 col-xs-4 col-md-4 py-3">
              <div className="nav_logo">
                <Link href="/">
                  <Image src={Header_logo} alt="nav_logo" priority={true} />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-xs-8 col-xs-8 py-4">
              <div className="ns-nav-item">
                <div
                  className="ns-nav-bar"
                  onClick={() => setSidebar(!sidebar)}
                >
                  <HiBars3BottomRight />
                </div>
                {sidebar && (
                  <div>
                    <NavSidebar setSidebar={setSidebar} />
                  </div>
                )}
                <ul className="nav-stev">
                  <li>
                    <a
                      href="/"
                      id="1"
                      key={1}
                      onClick={handleClick}
                      className={textcolor === "1" ? "active-nav" : "nav-item"}
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
                      className={textcolor === "2" ? "active-nav" : "nav-item"}
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
                      className={textcolor === "3" ? "active-nav" : "nav-item"}
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
                      className={textcolor === "4" ? "active-nav" : "nav-item"}
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
                      className={textcolor === "5" ? "active-nav" : "nav-item"}
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
                      className={textcolor === "6" ? "active-nav" : "nav-item"}
                    >
                      pricing
                    </a>
                  </li>
                  <li className="nav-children">
                    <a
                      href="#ns-blog-part"
                      id="7"
                      key={7}
                      onClick={handleClick}
                      className={textcolor === "7" ? "active-nav" : "nav-item"}
                    >
                      blog
                    </a>
                    <div className="sub-nav">
                      <ul className="sub-nav-stev">
                        <li>
                          <a
                            href="/blog-right-sidebar"
                            id="10"
                            key={10}
                            onClick={handleSubNav}
                            className={
                              subtextcolor === "10"
                                ? "active-sub-nav"
                                : "sub-nav-item"
                            }
                          >
                            blog Right sidebar
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
                                ? "active-sub-nav"
                                : "sub-nav-item"
                            }
                          >
                            blog Left sidebar
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
                                ? "active-sub-nav"
                                : "sub-nav-item"
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
                                ? "active-sub-nav"
                                : "sub-nav-item"
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
                                ? "active-sub-nav"
                                : "sub-nav-item"
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
                                ? "active-sub-nav"
                                : "sub-nav-item"
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
                      className={textcolor === "8" ? "active-nav" : "nav-item"}
                    >
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
