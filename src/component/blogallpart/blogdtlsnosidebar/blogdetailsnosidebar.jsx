import React from 'react'
import Blogdetails from '../blogdetailswithsidebar/blogdetails'

function Blogdetailsnosidebar() {
  return (
    <div className='blog-details-sidebar'>
      <div className="container-sm">
        <div className="row">
            <div className="col-lg-12">
                <Blogdetails/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogdetailsnosidebar
