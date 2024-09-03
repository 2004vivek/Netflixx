import React, { useContext } from 'react'
import { context } from '../Context/context'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { IoIconName } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Login() {
  console.log("this is a login page")
    const {showpassword,passwordHandler,formdata,formHandler,submitHandler,inputstyle}=useContext(context)
  return (
    <div className='login_back'>
      <div className="black_bg1">
      <div className='header'>
      <div className='imgs'><img src="logo.svg" alt="logo"/></div>
      </div>
    <div className='Login_page_form'>
        <div className='login_inner'>        
        <div className='content_heading_login'>Sign In</div>
        <div className='form'>
        <form action="" onSubmit={submitHandler}>
        <div className='input_tag_login'><input type="email" name='name' value={formdata.name} style={inputstyle} onChange={formHandler} placeholder='Email or Mobile no'/></div>
        <div className='input_tag_login'><input type={showpassword?"text":"password"} style={inputstyle} name='password' onChange={formHandler} value={formdata.password} placeholder='Password' id='input_password'/>{showpassword?<IoIosEye className='login_icon' onClick={passwordHandler} />:<IoIosEyeOff className='login_icon' onClick={passwordHandler}/>}</div>
            <div><button className='login_btn' onClick={submitHandler}>Sign In</button></div>
            <div className='forgot'>Forgot Password?</div>
        </form>
        </div>
        <div className='login_checkbox'>
            <input style={{height:"0.87rem" ,width:"0.87rem"}} type="checkbox" /> <span className='remember'>Remember me</span>
        </div>
        <div style={{textAlign:"center"}}><span className='netflix'>New to Netflix? </span> <span className='signup'><Link className='signup' to="/signup">Sign up now.</Link></span></div>
        </div>
    </div>
      </div>
    </div>
  )
}
