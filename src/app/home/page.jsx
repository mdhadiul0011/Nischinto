import HomePart from '@/component/homepart'
import React from 'react'

function Home({video,setVideo}) {
  return (
    <>
      <HomePart  video={video}  setVideo={setVideo}/>
    </>
  )
}

export default Home
