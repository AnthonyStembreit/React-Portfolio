import React, { useState } from 'react'
import ContactLink from '../components/contactLink'

export default function Links() {
    const [ContactState, setContactState] = useState([

        {
            link: "https://github.com/AnthonyStembreit",
            icon: "fab fa-github-square",
            text: "Github"
        },
        {
            link: "https://www.linkedin.com/in/anthony-stembreit",
            icon: "fab fa-linkedin",
            text: "linkedIn"
        },
        {
            link: "mailto:stembreit@gmail.com",
            icon: "fas fa-envelope",
            text: "stembreit@gmail.com"
        }
    ])
    return (
        
        ContactState.map(contact => (
            
            <ContactLink
            link={contact.link}
            icon={contact.icon}
            text={contact.text} />
            
            ))
    )
}
