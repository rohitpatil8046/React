import React from "react";

function Card(props){
    console.log(props)
    return( <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className = "card__info">
            <span className="card__category">
              {props.title}</span>
            <h3 className="card__title"> {props.sname} </h3>
            <a href={link} target="_blank">
              <button>Watch Now</button>
            </a>
    
          </div>
    
        </div>
    
      </div>
      <input type="text" value="Rohit"></input>
      </>
  
    );
  }

  export default Card;