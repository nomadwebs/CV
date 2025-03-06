import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../data/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

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
                        <img key={index} src={work.w_img} alt={work.w_name} />
                    )
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow icon" />
            </div>
        </div>
    )
}

export default MyWork