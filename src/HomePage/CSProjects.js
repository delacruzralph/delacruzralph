import React from 'react';
import ProjectGallery from './ProjectGallery';

import supreme from './assets/supreme.png'
import website from './assets/website.png'

function CSProjects() {
    const csprojects = {
      project1: {
        title: 'Portfolio Website',
        description: 'This simple portfolio website was made from scratch and utilizes ReactJS and React-Bootstrap.\
                      While I have had experience with web development, I learned a lot from this project such as\
                      structuring my app\'s files. I also enjoyed researching and exploring different pieces of React,\
                      some features/components I didn\'t get the chance to use here.',
        link: 'https://github.com/delacruzralph/delacruzralph.github.io',
        imgSrc: website
      },
      project2: {
        title: 'CS Project 2',
        description: 'Blahblahblah',
        link: ''
      },
      project3: {
        title: 'Supreme Bot (not for actual use)',
        description: 'At one of my co-ops, Selenium was heavily used in the QA/Testing context. From my experience using webdrivers, I thought about\
                      the possibility of using Selenium as a bot that can fill out forms quickly. This is especially beneficial when new, exclusive releases\
                      of a product come out and are limited in stock. However, I did this project for fun and have not, nor will I, ever use it for actual purchases.\
                      This was programmed in Python.',
        link: 'https://www.supremenewyork.com/shop/all',
        imgSrc: supreme
      }
    }

    return (
        <div>
          <ProjectGallery props={csprojects}/>
        </div>
    )
}

export default CSProjects
