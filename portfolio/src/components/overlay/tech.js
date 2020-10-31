import React from 'react'

export default function Tech(props){
    return(
        props.tech.map(tech =>
           <li>
               {tech}
           </li> )
    )
}