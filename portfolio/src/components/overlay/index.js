import React from 'react'
import Tech from './tech'
import './overlay.css'

export default function Overlay(props) {
    return (
    <div class="overlay" id={props.name}>
        <br></br>
        <ul class="overlay">
        <Tech tech={props.tech}/>
        </ul>
        <br></br>
        <p class="overlay">{props.description}</p>
    </div>
    )
}