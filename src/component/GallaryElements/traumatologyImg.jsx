import React from 'react'
import Image from 'next/image'

// imgs
import gal_img4 from "../../../public/assets/image/gallaryImg/project4.jpg"
import gal_img6 from "../../../public/assets/image/gallaryImg/project6.jpg"
import gal_img7 from "../../../public/assets/image/gallaryImg/project7.jpg"

function TraumatologyImg() {
  return (
    <div className='ns-gal-all-img'>
    <div className="urology-img-colomn">        
      <div className="urology-img">
        <Image src={gal_img4} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
      </div>
      <div className="urlogy-img">
      <Image src={gal_img6} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
      </div>
      <div className="urlogy-img">      
        <Image src={gal_img7} alt='card-gal-img'  className='uro-gal-img' priority={true}/>
      </div>
    </div>
    </div>
  )
}

export default TraumatologyImg
