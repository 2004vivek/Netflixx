import React from 'react'
import './Styling.css'
export default function Page2() {
  return (
    <div className='page2'>
      <div className='content1'>
      <div className="content1_left">
        <div>
            <h1 className='content_heading'>Enjoy on your TV</h1>
        </div>
        <div>
            <p className='content1_para1'>Watch on smart TVs,Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
      </div>
        <div className="content1_right">
            <div className="content1_right_inner">
            <img src="tv.png" alt="tv"/>  
            <video className='video' src="video-tv-1.m4v" muted loop autoPlay></video> 
            </div>
            {/* <div>
                <img src="tv.png" alt="tv"/>   
                <video className='video' src="video-tv-1.m4v" autoPlay="infinite"></video> 
            </div> */}
        </div>
        
      </div>
      <div className="seperation"></div>
    </div>
  )
}
