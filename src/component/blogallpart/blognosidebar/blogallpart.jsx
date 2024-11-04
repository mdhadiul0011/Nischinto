import Footer from '@/component/layout/footer/footer'
import Navigation from '@/component/layout/header/navigation'
import React from 'react'
import BlogSidebarHero from '@/component/heropart/blogsidebarhero'
import Nosidebar from './nosidebar'

function BlogAllPart() {
  return (
    <>
      <Navigation/>
      <BlogSidebarHero/>
      <Nosidebar/>
      <Footer/>
    </>
  )
}

export default BlogAllPart