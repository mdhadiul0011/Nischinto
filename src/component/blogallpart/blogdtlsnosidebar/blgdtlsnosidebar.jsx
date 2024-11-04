import React from "react";
import Navigation from "@/component/layout/header/navigation";
import Footer from "@/component/layout/footer/footer";
import BlogDetailsHero from "@/component/heropart/blogdetailshero";
import Blogdetailsnosidebar from "./blogdetailsnosidebar";

function Blgdtlsnosidebar() {
  return (
    <div>
      <Navigation />
      <BlogDetailsHero/>
      <Blogdetailsnosidebar/>
      <Footer />
    </div>
  );
}

export default Blgdtlsnosidebar;