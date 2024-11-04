import Image from 'next/image'
import React from 'react'

//recent post img 
import rcnt_pst_img1 from "../../../../public/assets/image/gallaryImg/project2.jpg"
import rcnt_pst_img2 from "../../../../public/assets/image/gallaryImg/project3.jpg"
import rcnt_pst_img3 from "../../../../public/assets/image/gallaryImg/project4.jpg"
import Link from 'next/link'
import { Blog_arachives_data, Blog_categories_data, Blog_recentpost_data, Blog_tags_data } from '@/alldata/blogsidebardata'

function Sidebar() {
  return (
    <div className='ns-blog-right-sidebar'>
      <div className="ns-sidebar-categories">
        <h3>Categories</h3>
        <ul>
          {
            Blog_categories_data.map((item, i) => (
              <li key={i}>{item.categories}</li>
            ))
          }
        </ul>
      </div>
      <div className="ns-sidebar-categories">
        <h3>Arachives</h3>
        <ul>
          {
            Blog_arachives_data.map((item, i)=>(
              <li key={i}>{item.arachives}</li>
            ))
          }
        </ul>
      </div>
      <div className="ns-sidebar-recentpost">
        <h3>Recent Post</h3>
        {
          Blog_recentpost_data.map((item, i)=>(
            <div className="ns-rcntpst" key={i}>
              <div className="ns-rcntpst-img">
                <Image src={item.img} alt='recent-post-img' className='img' priority={true}/>
              </div>
              <div className="ns-rcnt-post-text">
                <Link href='#'>
                  <h3>{item.headline}</h3>
                </Link>
                <p>{item.date}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="ns-sidebar-tags">
        <h3>Popular Tags</h3>
        {
          Blog_tags_data.map((item, i)=> (
            <button key={i}>{item.tags}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
