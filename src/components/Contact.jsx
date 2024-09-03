import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Contact() {
  console.log("this is contact")
  return (
    <>

    <div><p className='content_para2'>Ready to watch? Enter your email to create or restart your membership.</p></div>
    <form action="">
    <div className='content_get'>
    <div className='input_tag'><input type="email" placeholder='Email address'/></div>
    <div><button className='input_btn' >Get Started<MdKeyboardArrowRight fontSize={"2svw"}/></button></div>
    </div>
     </form>
    </>
  )
}
