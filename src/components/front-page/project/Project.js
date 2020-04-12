import React from "react";
import './style.scss';

function Project(props) {
    return (
        <div className='project-items-wrapper'>
            <div className='frow'>
                {props.children}
            </div>
        </div>
    );
}

function ProjectItem(props) {
    let languagesContent = props.itemObj.languages.edges.map(language => (
        <ProjectLanguage key={language.node.id} color={language.node.color} name={language.node.name}/>
    ));
    return (
        <div className="col-sm-1-2">
            <div className="project-item">
                <a href={props.itemObj.url} target="_blank">
                    <h3>{props.itemObj.name}</h3></a> <span className="forked"></span><p>{props.itemObj.description}</p>
                <ul className="project-languages">
                    {languagesContent}
                </ul>
            </div>
        </div>
    )
}

function ProjectLanguage(props) {
    let styleElement = {
        backgroundColor: props.color
    };

    return (
        <li>
            <span style={styleElement}>{props.name}</span>
        </li>
    )
}
export {Project, ProjectItem, ProjectLanguage}