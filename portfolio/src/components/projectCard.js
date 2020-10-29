import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProjectCard(props) {
    console.log(props)

    return (
        <Card >
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <img src={props.image} alt={props.name}></img>
                 </Card.Text>
            </Card.Body>
            <Card.Footer >
                <Button variant="dark"><a href={props.deployed} target="_blank">Deployed</a></Button>
                <Button variant="dark"><a href={props.github} target="_blank">Github</a></Button>
                <Button variant="dark">icon</Button>
            </Card.Footer>
        </Card>
    )
}