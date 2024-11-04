import React from 'react'
import Image from 'next/image'

// imgs
import gal_img1 from "../../../public/assets/image/gallaryImg/project1_lg.jpg"
import gal_img3 from "../../../public/assets/image/gallaryImg/project3.jpg"
import gal_img7 from "../../../public/assets/image/gallaryImg/project7.jpg"

function UrologyImg() {
  return (
    <div className='ns-gal-all-img'>
      <div className="urology-img-colomn">        
        <div className="urology-img">
          <Image src={gal_img1} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
        </div>
        <div className="urlogy-img">
        <Image src={gal_img3} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
        </div>
        <div className="urlogy-img">      
          <Image src={gal_img7} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
        </div>
      </div>
    </div>
  )
}

export default UrologyImg
