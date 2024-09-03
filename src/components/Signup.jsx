import React, { useContext } from 'react'
import { context } from '../Context/context'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function Signup() {
  const {showpassword,passwordHandler,inputstyle,signupdata,signupHandler,SignupFormHandler}=useContext(context)
  return (
    <div className='login_back'>
      <div className="black_bg1">
      <div className='header'>
      <div className='imgs'><img src="logo.svg" alt="logo"/></div>
      </div>
      <div className='Login_page_form'>
        <div className='login_inner'>        
        <div className='content_heading_login'>Sign Up</div>
        <div className='form'>
        <form action="" onSubmit={SignupFormHandler}>
        <div className='input_tag_login'><input type="text" name='name' value={signupdata.name} style={inputstyle} onChange={signupHandler} placeholder='Name'/></div>
        <div className='input_tag_login'><input type="email" name='email' value={signupdata.email} style={inputstyle} onChange={signupHandler} placeholder='Email or Mobile no'/></div>
        <div className='input_tag_login'><input type={showpassword?"text":"password"} style={inputstyle} name='password' onChange={signupHandler} value={signupdata.password} placeholder='Password' id='input_password_signup'/>{showpassword?<IoIosEye className='login_icon' onClick={passwordHandler} />:<IoIosEyeOff className='login_icon' onClick={passwordHandler}/>}</div>

        <div className='input_tag_login'><input type={showpassword?"text":"password"} style={inputstyle} name='cpassword' onChange={signupHandler} value={signupdata.cpassword} placeholder='Confirm Password' id='input_passwords_signup'/>{showpassword?<IoIosEye className='login_icon' onClick={passwordHandler} />:<IoIosEyeOff className='login_icon' onClick={passwordHandler}/>}</div>
            <div><button className='login_btn'>Sign Up</button></div>
            <div className='forgot'>Forgot Password?</div>
        </form>
        </div>
        <div style={{textAlign:"center"}}><span className='netflix'>Already Have An Account? </span> <Link className='signup' to="/"><span>Sign In</span></Link></div>
        </div>
    </div>
      </div>
    </div>
  )
}