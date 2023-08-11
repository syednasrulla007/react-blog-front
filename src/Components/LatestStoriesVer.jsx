import React,{Fragment} from 'react';
import "./LatestStoreisVer.css";
import { useNavigate } from 'react-router-dom';


const LatestStoriesVer = (props) => {
  const navigate = useNavigate();

  const handleClick = (eleID,Data) =>{
    // console.log("EleId  ",eleID);
    // console.log("Data  ",Data);
    navigate('/article',{state:{data:Data,eleid:eleID}}); 
  }
  return (
    <div className='LatestStoriesVer-container'>
        <h2>Latest {props.Heading} Stories</h2> 
        <div className="flex-containerLSV">
            <div className="grid-container">
                {
                props.data.map((ele,index)=>{
                    return(
                    <Fragment key={index}>
                        <div className="grid-item"><img src={ele.Link} width="250" height="200" alt='Img' onClick={() => handleClick(ele.id,props.data)}></img></div>
                        <div className="grid-item">
                        <h6>Title :{ele.Title}</h6>
                        <p>Production House : {ele.Production_comp}</p>
                        <p>Distributor : {ele.Distributor}</p>
                        <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                        </div>
                    </Fragment>
                    )
                })
                // console.log(props)
                }
            </div>
        <div className='advertisement'>advertisement</div>
      </div>
    </div>
  )
}

export default LatestStoriesVer