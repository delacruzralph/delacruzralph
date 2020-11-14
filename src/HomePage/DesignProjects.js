import React from 'react'
import ProjectGallery from './ProjectGallery'

import nomads from './assets/nomads_website.png'
import sari_fa_pic from './assets/sari_fa_pic.png'
import sari_sp_pic from './assets/sari_sp_pic.png'
import sari_fa from './assets/sari_fa.pdf'
import sari_sp from './assets/sari_sp.pdf'


function DesignProjects() {
    const designprojects = {
        project1: {
          title: 'Nomads Graphics and Website',
          description: 'Blahblahblah',
          link: 'https://nomads.squarespace.com/',
          imgSrc: nomads
        },
        project2: {
          title: 'Sari Sari Spring 2019 Magazine',
          description: 'Blahblahblah',
          link: sari_sp,
          imgSrc: sari_sp_pic
        },
        project3: {
          title: 'Sari Sari Fall 2018 Magazine',
          description: 'Blahblahblah',
          link: sari_fa,
          imgSrc: sari_fa_pic
        },
      }

    return (
        <div>
            <ProjectGallery props={designprojects} />
        </div>
    )
}

export default DesignProjects
