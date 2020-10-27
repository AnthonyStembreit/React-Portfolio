import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Contact() {
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Control as="textarea" placeholder="Reason for Inquiry" rows={3} />
                </Col>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}