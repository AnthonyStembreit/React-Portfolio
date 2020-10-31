import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './contactLink/contactLink.css'
import Resume from '../Anthony Stematz-Breitling Resume (1).pdf'
export default function ResumeLink() {
    return (
        <div class="contactLink">

            <a href={Resume} target="_blank">
                <Row>
                    <Col></Col>
                    <Col><i class="fas fa-file-pdf"></i></Col>

                    <Col>Resume</Col>
                    <Col></Col>
                </Row>
            </a>
        </div>
    )
}