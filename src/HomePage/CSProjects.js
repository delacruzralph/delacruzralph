import React from 'react';
import ProjectGallery from './ProjectGallery';

import supreme from './assets/supreme.png'
import website from './assets/website.png'

function CSProjects() {
    const csprojects = {
      project1: {
        title: 'Portfolio Website',
        description: 'Blahblahblah',
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
        description: 'Blahblahblah',
        link: 'link',
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
