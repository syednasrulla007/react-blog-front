import React from 'react'
import { useContext } from 'react';
import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Hollywood = () => {
  const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  return (
    <div>Hollywood
      <Stories Data={Data.HollEntries}/>
    </div>
  )
}

export default Hollywood