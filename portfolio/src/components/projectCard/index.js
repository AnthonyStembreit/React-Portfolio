import React from 'react'
import Card from 'react-bootstrap/Card'
import Overlay from '../overlay'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './projectCard.css'



export default function ProjectCard(props) {
    console.log(props)
    return (
        <Col>
            <Card id={props.id}>
                <Card.Header>{props.name}</Card.Header>
                <Card.Body>
                    <Card.Img src={props.image} alt={props.name}></Card.Img>
                    <Overlay
                        id={props.id}
                        tech={props.tech}
                        description={props.description} />
                </Card.Body>
                <Card.Footer >
                    <Button variant="dark"><a href={props.deployed} target="_blank">Deployed</a></Button>
                    <Button variant="dark"><a href={props.github} target="_blank">Github</a></Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}