import React from 'react'
import './Styling.css'
import Header from './Header'
import Contact from './Contact';
export default function Page1() {
  return (
    <div className='netflix_back'>
      <div className="black_bg"></div>
      <div><Header/></div>
      <div className='content'>
        <div><h1 className='content_heading'>Unlimited movies, TV shows and more</h1></div>
        <div><p className='content_para1'>watch anywhere. Cancel anytime.</p></div>
      <Contact/>
      </div>
      <div className="seperation"></div>
    </div>
  )
}
