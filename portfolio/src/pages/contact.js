import React, {useState} from 'react'
import ContactLink from '../components/contactLink'
import Resume from  '../files/Anthony Stematz-Breitling Resume (1).pdf'


export default function Contact(Resume) {
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
            link:"../files/Anthony Stematz-Breitling Resume (1).pdf",
            icon: "fas fa-file-pdf",
            text: "Resume"
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
                text={contact.text}/>
           
        ))
    )
}