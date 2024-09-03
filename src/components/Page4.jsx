import React from 'react'

export default function Page4() {
  return (
    <div className='page2'>
    <div className='content1'>
    <div className="content1_left">
      <div>
          <h1 className='content_heading'>Watch everywhere</h1>
      </div>
      <div>
          <p className='content1_para1'>Stream unlimited movies and TV shows on your phone,tablet,laptop,and TV.</p>
      </div>
    </div>
      <div className="content1_right">
          <div className="content1_right_inner">
          <img src="picture2.png" alt="tv"/>  
          <video className='video1' src="video-devices-2.m4v" muted loop autoPlay></video> 
          </div>
      </div>
    </div>
    <div className="seperation"></div>
  </div>
  )
}
