import React from "react";
import './My_Work.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import Mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const My_Work = () => {
    return (
        <div id="work" className="my_work">
            <div className="mywork_title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork_container">
                {Mywork_data.map((mywork,index)=>{
                    return <img key={index} src={mywork.w_img} alt="" />
                })}
            </div>
            <div className="show_more">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default My_Work