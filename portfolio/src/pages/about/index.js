import React from 'react'
import Image from '../../img/received_636634633666593_7.jpeg'
import './about.css'

export default function About(){
    return(
        <div>
            <img src={Image} alt="profile pic" id="portrait"></img>
            <p>Something about me</p>
        </div>
    )
}