import React from 'react'
import Tech from './tech'
import Button from 'react-bootstrap/Button'
import './overlay.css'



export default function Overlay(props) {
    return (
    <div class="overlay" id={props.name + "description"}>
        <Button id={props.name + "close"}><i class="fas fa-arrow-circle-down"></i></Button>
        <p>{props.description}</p>
        <ul>
        <Tech tech={props.tech}/>
        </ul>
    </div>
    )
}