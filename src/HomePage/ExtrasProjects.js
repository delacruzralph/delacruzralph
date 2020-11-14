import React from 'react'
import ProjectGallery from './ProjectGallery'

import shadowman from './assets/shadowman.png'
import nomads from './assets/nomads_sp20.png'
import pokewulf from './assets/pokewulf.png'

function ExtrasProjects() {
    const extras = {
        project1: {
          title: 'Shadow Man - Noname [Choreography]',
          description: 'A mini-project I did with a good friend. Fun fact: he started Nomads Dance Team (the team I\'m in). This\
                        was one of the first choreography projects I\'ve ever done!',
          link: 'https://www.youtube.com/watch?v=eV0MEkICwfs&feature=youtu.be',
          imgSrc: shadowman
        },
        project2: {
          title: 'Nomads Spring 2020 Set Video',
          description: 'Since the spring season ended early due to COVID-19, we weren\'t able to perform this set anywhere. However\
                        I felt that the effort and hunger that each person on the team demonstrated should be rewarded somehow.\
                        I was able to collect a bunch of different clips from practice, random videos of us fooling around, etc. and\
                        compile it all together into a set we\'re all proud of and wished to perform.',
          link: 'https://www.youtube.com/watch?v=xkv5VilXtVw&feature=youtu.be',
          imgSrc: nomads
        },
        project3: {
          title: 'Beowulf & Wiglaf Vs. The Dragon',
          description: 'One of the first legitimate video projects I edited back in 2016. I remember spending hours trying to learn\
                        how to use Adobe Photoshop and Illustrator and designing some of the graphics pixel by pixel. The entire video\
                        was put together in Sony Vegas Pro.',
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
