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
          description: 'As graphics designer and marketing director of Nomads Dance Team, I handle a lot of the promotional materials and media. \
          This year, I designed and started up our website through Squarespace. I also used a minimal amount of Javascript and jQuery.',
          link: 'https://nomads.squarespace.com/',
          imgSrc: nomads
        },
        project2: {
          title: 'Sari Sari Spring 2019 Magazine',
          description: 'In the Philippines, a sari-sari refers to convenience stores that are found in neighborhoods\
                        and streets. The one featured his refers to NU Barkada\'s bi-annual newsletter. I designed this\
                        magazine using Adobe InDesign.',
          link: sari_sp,
          imgSrc: sari_sp_pic
        },
        project3: {
          title: 'Sari Sari Fall 2018 Magazine',
          description: 'This issue of the Sari Sari was the first one I designed for the start of the schoolyear in the fall of 2018\
                        I think that from this one to the spring issue, I improved a little bit in terms of designing layout, typography,\
                        and the overall space of a page. This was also design through Adobe InDesign.',
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
