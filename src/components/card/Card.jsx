import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="konteynir">
      {data.map(({name,job,comment,img,id}) => {
        return (
          <div className="kart"  key={id}>
            <h1 >{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
