import Footer from '@/component/layout/footer/footer'
import Navigation from '@/component/layout/header/navigation'
import React from 'react'
import BlogSidebarHero from '@/component/heropart/blogsidebarhero'
import BlogPageWithSidebar from './blogpagewithsidebar'

function BlogAll() {
  return (
    <>
      <Navigation/>
      <BlogSidebarHero/>
      <BlogPageWithSidebar/>
      <Footer/>
    </>
  )
}

export default BlogAll