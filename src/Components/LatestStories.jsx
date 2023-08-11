import React from 'react';
import './LatestStories.css';
import { useNavigate } from 'react-router-dom';

const LatestStories = (props) => {
    // console.log("Props  ",props);

    const navigate = useNavigate();

    const handleClick = (eleID,Data) =>{
        // console.log("EleId  ",eleID);
        // console.log("Data  ",Data);
        navigate('/article',{state:{data:Data,eleid:eleID}}); 
      }
  return (
    <>
        <h2>Latest {props.Heading} Stories</h2>       
        <div className='flex-containerLatestStories'>
            {
                props.data.map((ele,index)=>{
                    return (
                        <div className="flex-items" key={index}>
                            <img src={ele.Link} width="250" height="200" alt='Img' onClick={() => handleClick(ele.id,props.data)}></img> 
                            <h3 style={{color:"#808080"}}>{ele.Title}</h3>
                    </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default LatestStories