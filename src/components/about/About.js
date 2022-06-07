import React from "react";
import { Parallax, Background } from 'react-parallax';
import img1 from '../../imgs/fondoViaje.jpg';
import img2 from '../../imgs/viajes.jpg';
import img3 from '../../imgs/sports.jpg';
import v1 from '../../imgs/paisaje.jpg';
import v2 from '../../imgs/gixxer.jpg';
import v3 from '../../imgs/globos.jpg';
import p1 from '../../imgs/para-que-sirve-javascript.jpg';
import p2 from '../../imgs/image2.jpg';
import p3 from '../../imgs/globos.jpg';
import d1 from '../../imgs/running.jpg';
import d2 from '../../imgs/stadium.jpg';
import d3 from '../../imgs/trotar.jpg';

import "./about.css";

const imgsParallax = [
  {
    img: img1,
    titulo: 'Viajes',
    clase: 'insideStyles insideStylesp1',
    galeria: {
      g1: v1,
      g2: v2,
      g3: v3,
    }
  },
  {
    img: img3,
    titulo: 'Deporte',
    clase: 'insideStyles insideStylesp1',
    galeria: {
      g1: d1,
      g2: d2,
      g3: d3,
    }
  },
  {
    img: img2,
    titulo: 'Programación',
    clase: 'insideStyles insideStylesp2',
    galeria: {
      g1: p1,
      g2: p2,
      g3: p3,
    }
  },
]

export const About = () => {
  return (
    <section id="section-about" className="pt-5">
      <h3 className="py-5 text-center ">Pasiones</h3>
      <div className="container-fluid pt-5">
        <div className="row">
          {
            imgsParallax.map(i => (
              <Parallax bgImage={i.img} strength={500} key={i.img}>
                <div style={{ height: "100vh" }}>
                  <img src={i.galeria.g1} alt="Logo" className="g2"/>
                  <img src={i.galeria.g2} alt="Logo" className="g3"/>
                  <img src={i.galeria.g3} alt="Logo" className="g4"/>
                  <div className={i.clase}>
                  <a href="http://www.thismanslife.co.uk" target="_blank">{i.titulo}</a>
                  </div>
                </div>
              </Parallax>
            ))
          }
        </div>
      </div>
    </section>
  );
};
