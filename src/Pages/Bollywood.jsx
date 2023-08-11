import React, { useContext } from 'react'
import Stories from '../Components/Stories'
import ContextData from '../Components/ContextApi'

const Bollywood = () => {
  const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  return (
    <div>
      <h4>Movies</h4>
      <Stories Data={Data.BollEntries}/>
    </div>
  )
}

export default Bollywood