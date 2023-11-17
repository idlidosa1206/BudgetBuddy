import React from "react";
import "./Card.css";

const Card =(props)=>{
    return(
        <div className='card'>
          {/* <img src={props.image} alt="" width="60px" height="90px" /> */}
           <h2>{props.text1}</h2>
           <h4>{props.text2}</h4>
        </div>
    )
}
export default Card;