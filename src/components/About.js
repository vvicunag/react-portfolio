import React from "react";

const container = {
    display: "flex"
};

const myImageDiv = {
    width: "25%",
    padding: "10px",
    display: "inline"
};

const myImage = {
    borderRadius: "25px",
    boxShadow: "5px 5px 5px"
};

const myText = {
    padding: "30px"
}

export default function About() {
    return (
    <div style={container}>
        <div style={myImageDiv}>
            <img
                style={myImage}
                src="\images\Vicuna, Vicente.JPG"
                alt="Pack on track app"
            />
        </div>
        <div style={myText}>
            <h4>Lawyer with an interest in renewable energy, 
            climate change and disruptive technology. More 
            than 3 years of professional experience, focused 
            mainly on stakeholder collaboration, sustainable 
            development, public policy, and international 
            relations. Consolidating knowledge on green 
            technologies, venture capital and the startup 
            scene.<br></br><br></br>
            Currently studying an MBA in the European School 
            of Management and Technology (ESMT) in Berlin, and 
            doing a Coding Bootcamp offered by the same institution. 
            Part of NET IMPACT at ESMT.
            <br></br><br></br>
            Coding in SQL, Javascript, CSS, and HTML. 
            In process of learning Python and R. 
            </h4>
        </div>    
    </div>

    )
}