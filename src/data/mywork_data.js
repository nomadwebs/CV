import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
    {
        id: 1,
        w_name: "Hourify360",
        description: 'Time Manager for freelancers',
        w_img: project1_img,
        tags: ['React', 'MongoDB', 'Mongoose', 'Express'],
        github: 'https://github.com/nomadwebs/hourify',
        link: 'https://hourify360.com/'

    },
    {
        id: 2,
        w_name: "Unsocial",
        description: 'Social network like Instagram',
        w_img: project2_img,
        tags: ['React', 'MongoDB', 'Mongoose', 'Express'],
        github: '#',
        link: 'https://hourify360.com/'
    },
    {
        id: 3,
        description: 'My own portfolio',
        w_name: "Francisco Sánchez G. Portfolio",
        w_img: project3_img,
        tags: ['React'],
        github: 'https://github.com/nomadwebs/CV',
        link: 'https://fransanchez.dev'
    },

]

export default mywork_data;