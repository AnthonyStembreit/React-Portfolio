import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/projectCard'
import projects from '../data/projects.json'
import Col from 'react-bootstrap/Col'

export default function Projects(){
   const [projectState, setProjectState] = useState([])
   useEffect(()=> setProjectState(projects), [])
    return(
        projectState.map(projects => (
            <Col>
            <ProjectCard
            id={projects.id}
            name={projects.name}
            image={projects.image}
            tech={projects.tech}
            description={projects.description}
            deployed={projects.deployed}
            github={projects.github}/>
            </Col>
        ))

    )
}