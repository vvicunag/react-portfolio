import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav'

const myFooter = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  padding: "7px"
}

export default function Navbar() {
    return (
<Nav style={myFooter} className="justify-content-end bg-dark" activeKey="/home">
  <Nav.Item>
    <Nav.Link href="https://github.com/vvicunag">My GitHub</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="mailto:vvicuna1@uc.cl">Email me</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="https://www.linkedin.com/in/vvicunag/">Linkedin</Nav.Link>
  </Nav.Item>
</Nav>
   )
}
