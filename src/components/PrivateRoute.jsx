import React, { useContext } from 'react'
import { context } from '../Context/context'
import { Navigate } from 'react-router-dom'
export default function PrivateRoute({children}) {
    const {islogged}=useContext(context)
    console.log("this is private route"+islogged);
    if(islogged){
        return children
    }
    else{
        return <Navigate to='/'/>
    }
}
