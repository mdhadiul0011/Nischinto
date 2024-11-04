import React from "react";
import Navigation from "@/component/layout/header/navigation";
import Footer from "@/component/layout/footer/footer";
import BlogDetailsHero from "@/component/heropart/blogdetailshero";
import Blogdtlswithsidebar from "./blogdtlswithsidebar";

function Blogdtlsrightsidebar() {
  return (
    <div>
      <Navigation />
      <BlogDetailsHero/>
      <Blogdtlswithsidebar/>
      <Footer />
    </div>
  );
}

export default Blogdtlsrightsidebar;
