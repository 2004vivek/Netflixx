import React from 'react'
export default function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_inner">
        <div>
           <div>Question? Call 000-919-1694</div> 
        </div>
        <div className='footer_main'>
            <div className='footer_content' id='one'>
                <div>FAQ</div>
                <div>Investor</div>
                <div>Privacy</div>
                <div>Speed Test</div>
            </div>
            <div className='footer_content'>
                <div>Help Center</div>
                <div>Jobs</div>
                <div>Cookie Prefernces</div>
                <div>Legal Notices</div>
            </div>
            <div className='footer_content' id='two'>
                <div>Account</div>
                <div>Ways to Watch</div>
                <div>Corporate Information</div>
                <div>Only on Netflix</div>
            </div>
            <div className='footer_content' id='last'>
                <div>Media </div>
                <div>Term of Use</div>
                <div>Contact Us</div>
              
            </div>
        </div>
      </div>
    </div>
  )
}
