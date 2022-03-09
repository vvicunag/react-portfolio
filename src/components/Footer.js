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
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
   )
}
