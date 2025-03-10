import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../data/mywork_data'
/* import arrow_icon from '../../assets/arrow_icon.svg' */
import { FaGithub, FaPlayCircle } from 'react-icons/fa'

const MyWork = () => {
    return (
        <div id='portfolio' className='mywork'>
            <div className="mywork-title">
                <h2>Portfolio</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div className='project-info'>
                            <img key={index} src={work.w_img} alt={work.w_name} />
                            <h3>{work.w_name}</h3>
                            <p>{work.description}</p>
                            <div className="tags-container">
                                {work.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={work.github} target='_blank'><FaGithub className="icon" style={{ color: '#FFFFFF' }} /></a>
                                {work.link !== null ? <a href={work.link}><FaPlayCircle className="icon" style={{ color: '#FFFFFF' }} /></a> : <></>}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow icon" />
            </div> */}
        </div>
    )
}

export default MyWork