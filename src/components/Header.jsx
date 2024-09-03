import React, { useContext, useRef } from 'react'
import './Styling.css'
import { MdOutlineTranslate } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { context } from '../Context/context';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const {language,englishref,hindiref,divsionref,toggleHandler,englishHandler,hindiHandler,islogged}=useContext(context)
  
  return (
      <>
    <div className='header'>
      <div className='imgs'><img src="logo.svg" alt="logo"/></div>
      <div className='header_sidebar'>
        <div className='btn1_parent'>
          <button className='btn1' onClick={toggleHandler} ><MdOutlineTranslate /><span className='language'>{language}</span><IoMdArrowDropdown/></button>
          <div className="divison" ref={divsionref} style={{display:"none"}}>
            <div ref={englishref} className='english' onClick={englishHandler}>English</div>
            <div ref={hindiref} className='hindi' onClick={hindiHandler}>Hindi</div>
          </div>
        </div>
        <div><button className='btn2'><NavLink className="link" to="/">{islogged?"Sign Out":"Sign In"}</NavLink></button></div>
      </div>
    </div>
      </>
  )
}
