import project1_img from '../assets/hourify.svg'
import project2_img from '../assets/unsocial.svg'
import project3_img from '../assets/portfolio.svg'

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
        github: 'https://github.com/nomadwebs/UnsocialApp',
        link: null
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