import { createContext, useEffect, useState } from "react";
import { useRef } from "react";
import netflix_data from "../Netflix_data";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
export const context=createContext();
export default function AppContextProvider({children}){
    const [cardid,setcardid]=useState(null);
    const navigate=useNavigate();
    const [inputstyle,setinputstyle]=useState({background:'transparent'});
    const [islogged,setlogged]=useState(false)
    const [formdata,setformdata]=useState({
        name:"",
        password:""
    })
    const [signupdata,setsignupdata]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    })
    const [language,setlanguage]=useState("Select Language")
    const englishref=useRef(null)
    const hindiref=useRef(null)
    const divsionref=useRef(null)
    const [showpassword,setshowpassword]=useState(false)

    function signupHandler(event){
        setsignupdata((prev)=>{
            return{ ...prev,[event.target.name]:event.target.value}
        })
    }
    function SignupFormHandler(event){
        console.log("this is clicked");
        event.preventDefault();
        localStorage.setItem('userdetails',JSON.stringify(signupdata))
        setsignupdata({
            name:"",
            email:"",
            password:"",
            cpassword:""
            })
        console.log(signupdata)
    }
    function formHandler(event){
        setformdata((prev)=>{
            return{ ...prev,[event.target.name]:event.target.value}
        })
    }
    useEffect(()=>{
        console.log("this is use effect")
        if(formdata.name=="" && formdata.password==""){
            setinputstyle({ background: 'transparent' })
        }
        else{
            setinputstyle({ background: '#242D3A' })
        }
    },[formdata.name])

   //storing the userdetails in local storage
    function submitHandler(event){
        console.log("clicked")
        event.preventDefault()
        let saveddata=JSON.parse(localStorage.getItem('userdetails'))
        console.log(saveddata)
        if(saveddata){
            if((saveddata.password===formdata.password)&&(saveddata.email===formdata.name)){
                navigate('/home')
                console.log("Inside the context when btn is clicked"+islogged)
                setlogged(true)
                setTimeout(() => {
                    toast('Logged In Successfully!',
                        {
                          icon: '👏',
                          style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                        }
                      );
                }, 400);
            }
            else{
                toast.error("User Not Found")
            }
        }
        else{
            toast.error("User Not Found")
        }
        setformdata({
            name: "",
            password: ""
        });
      
        
    }
  
  function toggleHandler(){
    console.log(divsionref.current)
    divsionref.current.style.display = divsionref.current.style.display === 'block' ? 'none' : 'block';
  }
  function englishHandler(){
    setlanguage(englishref.current.innerHTML)
    divsionref.current.style.display="none"
    console.log(englishref.current.innerHTML)
  }
  function hindiHandler(){
    setlanguage(hindiref.current.innerHTML)
     divsionref.current.style.display="none"
    console.log(hindiref.current.innerHTML)
  }
    function clickHandler(id) {
            if(cardid===id){
                setcardid(null)
            }
            else{
                setcardid(id)
            }
    }
    function passwordHandler(){
        setshowpassword(!showpassword)
    }
    const value={
        netflix_data,clickHandler,cardid,language,setlanguage,englishref,hindiref,divsionref,toggleHandler,englishHandler,hindiHandler,showpassword,setshowpassword,passwordHandler,formdata,setformdata,formHandler,submitHandler,inputstyle,setinputstyle,islogged,setlogged,signupdata,setsignupdata,signupHandler,SignupFormHandler
    }
    return <context.Provider value={value}>
            {children}
          </context.Provider>
}