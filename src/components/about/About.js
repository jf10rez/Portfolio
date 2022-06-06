import React from "react";
import { Parallax, Background } from 'react-parallax';
import img1 from '../../imgs/para-que-sirve-javascript.jpg';
import img2 from '../../imgs/image2.jpg';
import img3 from '../../imgs/foto.jpg';

import "./about.css";

export const About = () => {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  return (
    <section id="section-about">
      <div className="container-fluid">
        <div className="row">
          <Parallax bgImage={img1} strength={500}>
            <div style={{ height: "100vh" }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
          <Parallax bgImage={img2} strength={500}>
            <div style={{ height: "100vh" }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
          <Parallax bgImage={img3} strength={500}>
            <div style={{ height: "100vh" }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};
