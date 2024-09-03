import React, { useContext } from 'react'
import { GoPlus } from "react-icons/go";
import { context } from '../Context/context';
import { RxCross1 } from "react-icons/rx";
export default function Card({data}) {
  const {cardid,clickHandler}=useContext(context)
  return (
    <>
      <div className='card_inner' onClick={()=>clickHandler(data.id)}>
        <div>{data.question}</div>
      <div>{cardid==data.id?<RxCross1 />:<GoPlus fontSize={"34px"}/>}</div>
      </div>
      <div className='answer'>{cardid==data.id &&<div>{data.answer}</div>}</div>
    </>
  )
}
