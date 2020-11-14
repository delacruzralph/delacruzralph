import React from 'react'
import ProjectGallery from './ProjectGallery'

import textu from './assets/TextU.pdf'
import textu_pic from './assets/textu_pic.png'
import ds_proj from './assets/ds_proj.png'
import type_pic from './assets/type_system.png'
import type_system from './assets/systems_ralph.pdf'

function EducationalProjects() {
    const educationalprojects = {
        project1: {
            title: 'TextU',
            description: 'Blahblahblah',
            link: textu,
            imgSrc: textu_pic
        },
        project2: {
            title: 'Sentiment Analysis & Stocks',
            description: 'Blahblahblah',
            link: 'https://docs.google.com/presentation/d/1aA0v6-RhK8fDEPRLH3ZM9iNlO9LylFjthT0IB5zzu_M/edit?usp=sharing',
            imgSrc: ds_proj
        },
        project3: {
            title: 'Typeface Systems',
            description: 'Blahblahblah',
            link: type_system,
            imgSrc: type_pic
        }
    }

    return (
        <div>
            <ProjectGallery props={educationalprojects} />
        </div>
    )
}

export default EducationalProjects
