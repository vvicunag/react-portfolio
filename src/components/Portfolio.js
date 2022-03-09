import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const mystyle = {
    width: "56%",
    padding: "10px",
    marginLeft: "22%",
  };

  const myText = {
      color: "white"
  }


export default function Portfolio() {
    return (
    <div style={{backgroundColor: "#282c34"}}>
    <div style={mystyle}>
    <Carousel>
        <Carousel.Item>
            <a href=' https://intense-lowlands-65258.herokuapp.com/'>
            <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/vvicunag/react-portfolio/main/public/images/pac-on-track.jpg"
            alt="Pack on track app"
            />
            </a>
            <Carousel.Caption>
            <h3>Pack on Track</h3>
            <p>Keep your shipping information in one place... keep it simple</p>
            <p><a style={myText}  href="https://github.com/JenBerlin/Pack-On-Track/pull/21">GitHub</a></p> 
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href='https://jitasek.github.io/carbon-down/'>
            <img
            className="d-block centered w-100"
            src="images\planet2.jpg"
            alt="Second slide"
            />
            </a>
            <Carousel.Caption>
            <h3>Carbon Down</h3>
            <p>Measure your carbon dioxide footprint!</p>
            <p><a style={myText}  href="https://github.com/jitasek/carbon-down">GitHub</a></p> 
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images\placeholder-600x400.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Reserved for project 3</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    
    </div>
    )
}