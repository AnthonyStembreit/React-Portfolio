import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './projectCard.css'

export default function ProjectCard(props) {
    console.log(props)

    return (
        <Card id={props.id}>
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Img src={props.image} alt={props.name}></Card.Img>
            </Card.Body>
            <Card.Footer >
                <Button variant="dark"><a href={props.deployed} target="_blank">Deployed</a></Button>
                <Button variant="dark"><a href={props.github} target="_blank">Github</a></Button>
                <Button variant="dark"><i class=" buttonIcon fas fa-arrow-circle-up"></i></Button>
            </Card.Footer>
        </Card>
    )
}