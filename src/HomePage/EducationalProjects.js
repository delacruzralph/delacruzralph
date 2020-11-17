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
            description: 'A concept for a communication app intended to mitigate the language barriers that people may face. The idea came from\
                          my experience with my grandparents and how difficult it is sometimes to talk with them, since they have lived in the\
                          Philippines for their whole lives. Through this project, I was able to go through many different stages of the design process,\
                          from User Interviews to Storyboards to User Interface/Visual Design Spec and then finally, to a functional prototype.',
            link: textu,
            imgSrc: textu_pic
        },
        project2: {
            title: 'Sentiment Analysis & Stocks',
            description: 'For this project, my group wanted to focus on stocks especially since the market recently plummetted as a result of COVID-19.\
                          With yFinance and Twitter APIs, we gathered data, looked for trends, and applied training and testing algorithms to see\
                          if there was a relationship between the sentiment of Tweets and stocks and if we could predict the change in stock price.',
            link: 'https://docs.google.com/presentation/d/1aA0v6-RhK8fDEPRLH3ZM9iNlO9LylFjthT0IB5zzu_M/edit?usp=sharing',
            imgSrc: ds_proj
        },
        project3: {
            title: 'Typeface Systems',
            description: 'This project was the culmination of a semester of Typography. We were given a series of titles and descriptions and\
            had to lay them out on an 8x8 page. I explored different ways to play around with text, imagery, and color, and overall I am quite\
            satisfied with the end product. This was made using InDesign mostly.',
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
