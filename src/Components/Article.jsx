import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import "./Article.css";
import { useNavigate } from 'react-router-dom';


const Article = () => {
    const location = useLocation();
    const Data = location.state.data;
    const DataID = location.state.eleid;

    const navigate = useNavigate();

    const handleClick = (eleID,Data) =>{
      console.log("EleId  ",eleID);
      navigate('/article',{state:{data:Data,eleid:eleID}}); 
    }
  return (
    <div>
        {
            Data.map((ele,index)=>{
                return(
                    ele.id===DataID
                    ?
                        <Fragment key={index}>
                           <div className='Card'>
                                <h3>{ele.Title}</h3>
                                <img src={ele.Link} width="250" height="200" alt='Img' />
                                <p>
                                    {ele.Discription}
                                </p>
                            </div>
                        </Fragment>
                    : 
                        <Fragment key={index}>
                        </Fragment>
                )
            }) 
        }
        <hr />
        <h2 className='MoreFromHeading'>More From The Siren</h2>
        <div className='flex-containerArticle'>
            {
                Data.map((ele,index)=>{
                    return (
                        ele.id!==DataID
                        ?
                            <div className="flex-items" key={index}>
                                <img width="200px" height="200px" src={ele.Link} style={{borderRadius:"10px"}} alt='Img' onClick={() => handleClick(ele.id,Data)}></img> 
                                <h3 style={{color:"#808080"}}>{ele.Title}</h3>
                            </div> 
                        :   
                            <Fragment key={index}>
                            </Fragment>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Article