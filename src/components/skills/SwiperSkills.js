import { Swiper, SwiperSlide } from "swiper/react";

import { CardSkill } from "./CardSkill";
import { dimentions } from "../helpers/dimentions-card";

import imgJs from '../../imgs/imgjs.png'
import imgReact from '../../imgs/imgreact.png'
import imgAngular from '../../imgs/imgangular.png'
import imgCss from '../../imgs/imagecss.svg'
import imgNode from '../../imgs/imgnode.png'
import imgHtml from '../../imgs/imghtml.png'
import imgSql from '../../imgs/imgsql.jpg'


import "swiper/css";

export const SwiperSkills = () => {

  const cards = [
    {
      img: imgJs,
      name: 'Javascript',
      habilities: ['Ecmascript6', 'JQuery', 'Webpack']
    },
    {
      img: imgReact,
      name: 'React',
      habilities: ['Redux', 'Material-Ui', 'Git']
    },
    {
      img: imgNode,
      name: 'Node',
      habilities: ['Express', 'MongoDb', 'JWT']
    },
    {
      img: imgAngular,
      name: 'Angular',
      habilities: ['Typescript', 'Rxjs', 'Firebase']
    },
    {
      img: imgCss,
      name: 'Css',
      habilities: ['Sass, Less', 'Bootstrap', 'Tailwind']
    },
    {
      img: imgHtml,
      name: 'Html5',
      habilities: ['Seo', 'Preprocesadores']
    },
    {
      img: imgSql,
      name: 'DBs',
      habilities: ['Mysql', 'Postgress', 'SQL server']
    },
  ]
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3.5}
      breakpoints={dimentions}
    >
      {
        cards.map( card => (
          <SwiperSlide key={ card.name }>
            <CardSkill 
              img={ card.img } 
              name={ card.name } 
              habilities={ card.habilities }
            />
          </SwiperSlide>
        ) )
      }
      
    </Swiper>
  );
};
