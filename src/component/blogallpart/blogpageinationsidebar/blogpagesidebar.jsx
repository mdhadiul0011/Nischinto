import Footer from '@/component/layout/footer/footer'
import Navigation from '@/component/layout/header/navigation'
import React from 'react'
import PageWithSidebar from '../blog-right-sidebr/pagewithsidebar'
import BlogSidebarHero from '@/component/heropart/blogsidebarhero'

function BlogPageSidebar() {
  return (
    <>
      <Navigation/>
      <BlogSidebarHero/>
      <PageWithSidebar/>
      <Footer/>
    </>
  )
}

export default BlogPageSidebar
