import React from 'react'
import Image from '../../img/received_636634633666593_7.jpeg'
import './about.css'

export default function About(){
    return(
        <div>
            <img src={Image} alt="profile pic" id="portrait"></img>
            <p>Full Stack Web Developer and graduate of the University of Kansas Coding Boot-Camp. 
                Confident in HTML, Bootstrap, jQuery, and mySQL. 
                Presented the advantages of test driven development (TDD) to the founder of Cerbanimo LLC and 
                assisted in formatting a plan to include TDD in their upcoming project. 
                Enjoys contributing to meaningful and challenging projects in the work-place.  
                Looking forward to combining my experience in social justice with my new skills in technology to improve and shape the future! </p>
        </div>
    )
}