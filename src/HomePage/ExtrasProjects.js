import React from 'react'
import ProjectGallery from './ProjectGallery'

import shadowman from './assets/shadowman.png'
import nomads from './assets/nomads_sp20.png'
import pokewulf from './assets/pokewulf.png'

function ExtrasProjects() {
    const extras = {
        project1: {
          title: 'Shadow Man - Noname [Choreography]',
          description: 'Blahblahblah',
          link: 'https://www.youtube.com/watch?v=eV0MEkICwfs&feature=youtu.be',
          imgSrc: shadowman
        },
        project2: {
          title: 'Nomads Spring 2020 Set Video',
          description: 'Blahblahblah',
          link: 'https://www.youtube.com/watch?v=xkv5VilXtVw&feature=youtu.be',
          imgSrc: nomads
        },
        project3: {
          title: 'Beowulf & Wiglaf Vs. The Dragon',
          description: 'Blahblahblah',
          link: 'https://www.youtube.com/watch?v=_tcOIgBW4kw&feature=youtu.be&ab_channel=RiceBawlz',
          imgSrc: pokewulf
        },
      }

    return (
        <div>
            <ProjectGallery props={extras} />
        </div>
    )
}

export default ExtrasProjects
