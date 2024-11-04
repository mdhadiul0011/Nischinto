import React from "react";
import Navigation from "@/component/layout/header/navigation";
import Footer from "@/component/layout/footer/footer";
import BlogDetailsHero from "@/component/heropart/blogdetailshero";
import Blogdtlsleftsidebar from "./blogdtlsleftsidebar";

function Blogdtlswithleftsidebar() {
  return (
    <div>
      <Navigation />
      <BlogDetailsHero/>
      <Blogdtlsleftsidebar/>
      <Footer />
    </div>
  );
}

export default Blogdtlswithleftsidebar;