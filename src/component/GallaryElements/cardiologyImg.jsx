import React from 'react'
import Image from 'next/image'

// imgs
import gal_img1 from "../../../public/assets/image/gallaryImg/project1_lg.jpg"
import gal_img2 from "../../../public/assets/image/gallaryImg/project2.jpg"
import gal_img5 from "../../../public/assets/image/gallaryImg/project5.jpg"

function CardiologyImg() {
  return (
    <div className='ns-gal-all-img'>
      <div className="card-img-colomn">
      <Image src={gal_img1} alt='card-gal-img'  className='card-gal-img' priority={true}/>
      <Image src={gal_img5} alt='card-gal-img'  className='card-gal-img' priority={true}/>
      <Image src={gal_img2} alt='card-gal-img'  className='card-gal-img' priority={true}/>
      </div>
    </div>
  )
}

export default CardiologyImg
