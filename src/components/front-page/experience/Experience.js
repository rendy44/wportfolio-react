import React from "react";
import './style.scss';

function Experience(props) {
    return (
        <div className='experience-items-wrapper'>
            <div className='frow'>
                {props.children}
            </div>
        </div>
    );
}

function ExperienceItem(props) {
    let dateEnd = props.dateEnd ? props.dateEnd : 'Now';
        let elmStyle = {
            backgroundImage: `url(${props.companyLogo})`
        };

    return (
        <div className='col-sm-1-2'>
            <div className='experience-item'>
                <div className="company-logo" style={elmStyle}></div>
                <div className="experience-detail">
                    <h3 className="company-name">{props.companyName}
                        <sup><a href={props.companyUrl} className="company-url" target="_blank">[?]</a></sup></h3>
                    <span className="experience-role">{props.role}</span>
                    <span className="company-location">{props.companyLocation}</span>
                    <span className="experience-period">{props.dateStart} - {dateEnd}</span>
                </div>
            </div>
        </div>
    );
}

export {Experience, ExperienceItem};