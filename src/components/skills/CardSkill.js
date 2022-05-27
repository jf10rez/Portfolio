import React from "react";
// import { useSwiperSlide } from 'swiper/react';

import './styles/skills.css'

export const CardSkill = ( { img, name, habilities } ) => {

  // const swiperSlide = useSwiperSlide();
  return (
    // <div className="container-skill">
      <div className="card-skill">
        <img
          src={ img }
          alt="Person"
          className="card__image"
        />
        <ul>
          {
            habilities.map( hab => (
                <li key={ hab }> {hab} </li>
            ) )
          }
        </ul>
        
        <button className="btn draw-border">{ name }</button>
      </div>
    // </div>
  );
};
