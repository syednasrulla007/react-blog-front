import React from 'react'
import { useContext } from 'react';
import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Technology = () => {
  const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  return (
    <div>Technology
      <Stories Data={Data.TechEntries}/>
    </div>
  )
}

export default Technology