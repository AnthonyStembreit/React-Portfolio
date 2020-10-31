import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './contactLink.css'

export default function ContactLink(props) {
    return (
        <div class="contactLink">
            <a href={props.link} target="_blank">
                <Row>
                    <Col></Col>
                    <Col><i class={props.icon}></i></Col>

                    <Col>{props.text}</Col>
                    <Col></Col>
                </Row>
            </a>
        </div>
    )
}