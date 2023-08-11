import React, { Fragment} from "react";
// import Article from "./Article";
import './Stories.css';
import StoriesVertical from "./StoriesVertical";

const Stories = (props) => {
  // console.log("inside Stories  ",props.Data);
  // 

  return (
    <>
      <StoriesVertical data={props}/>
      <div className="flex-container">
        {
          props.Data.map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div ><img src={ele.Link} width="150" height="150" alt='Img' ></img></div>
                {}
                <div >
                  <h6>Title :{ele.Title}</h6>
                  {ele.Production_comp == null ?" ": <p>World Wide Gross Income: {ele.WorldWideGross}</p>}
                  
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </>

  );
};

export default Stories;
