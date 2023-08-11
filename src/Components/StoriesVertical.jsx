import React, { Fragment } from 'react'
import './Stories.css';
import { useNavigate } from "react-router-dom";

const StoriesVertical = (props) => {

  const navigate = useNavigate();

  const handleClick = (eleID,Data) =>{
    // console.log("EleId  ",eleID);
    // console.log("Data  ",Data);
    navigate('/article',{state:{data:Data,eleid:eleID}}); 
  }
  return (
    <div className="grid-container">
        {
          props.data.Data.map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div className="grid-item">
                  <img src={ele.Link} width="250" height="200" alt='Img' onClick={() => handleClick(ele.id,props.data.Data)}></img>
                </div>
                <div className="grid-item">
                  
                  {
                    ele.Production_comp == null ? <h4 style={{color:"grey"}}>{ele.Title}</h4> :(
                      <>
                        <h6>{ele.Title}</h6>
                        <p>Production House : {ele.Production_comp}</p>
                        <p>Distributor : {ele.Distributor}</p>
                        <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                      </>
                    )
                  }

                </div>
              </Fragment>
            )
          })
          // console.log(props)
        }
      </div>
  )
}

export default StoriesVertical