import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const mystyle = {
    width: "56%",
    padding: "10px",
    marginLeft: "22%",
  };


export default function Portfolio() {
    return (
    <div>
    <h1>Hello from Portfolio</h1>
    <div style={mystyle}>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images\placeholder-600x400.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block centered w-100"
            src="images\placeholder-600x400.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images\placeholder-600x400.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    
    </div>
    )
}