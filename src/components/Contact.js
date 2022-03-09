import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

export default function Contact() {
    return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="What is your name?" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Write your message here" />
    </Form.Group>
    <Button variant="primary" type="submit">
      SEND MESSAGE
    </Button>
  </Form>

    )
}