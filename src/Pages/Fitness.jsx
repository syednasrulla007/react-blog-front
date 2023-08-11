import React from 'react'
import { useContext } from 'react';
import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Fitness = () => {
  const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  return (
    <div>Fitness
      <Stories Data={Data.FitEntries}/>
    </div>
  )
}

export default Fitness