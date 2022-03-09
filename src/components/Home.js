import React from "react";

const mystyle = {
  backgroundSize:"100%",
  backgroundRepeat: "repeat-y",
  backgroundAttachment: "fixed",
  //height:"100%",
  width:"100%",
  alignSelf:"center"
  };

export default function Home() {
    return (
    // <h1>Hello from Home</h1>
    <div style={{display:"flex", backgroundColor:"#2a2826", height:"90vh" }}>
        <img src="https://raw.githubusercontent.com/vvicunag/react-portfolio/main/public/images/Lading.gif" style={mystyle}></img>
    </div>
    )
}