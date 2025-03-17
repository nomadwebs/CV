import project1_img from '../assets/hourify.svg'
import project2_img from '../assets/unsocial.svg'
import project3_img from '../assets/portfolio.svg'
import cartaFuturo from '../assets/cartaalfuturo.svg'

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
    {
        id: 4,
        w_name: "Carta al futuro",
        description: 'A service to send letters to yourself in the future',
        w_img: cartaFuturo,
        tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        github: null,
        link: 'https://cartaalfuturo.com/'
    },

]

export default mywork_data;