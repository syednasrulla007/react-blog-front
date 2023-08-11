import React from 'react'
import { useContext } from 'react';
import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Food = () => {
  const Data =useContext(ContextData);
  // console.log(Data);
  return (
    <div>Food
      <Stories Data={Data.FoodEntries}/>
    </div>
  )
}

export default Food