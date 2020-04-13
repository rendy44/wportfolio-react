import React from "react";
import './style.scss';
import ReactLoading from "react-loading";

class Project extends React.Component {
    constructor(props) {
        super(props);

        // Init default state.
        this.state = {
            githubApi: this.props.api,
            isLoaded: false,
            projects: []
        }
    }

    componentDidMount() {
        const comp = this;
        this.state.githubApi.getPinnedRepos()
            .then(response => response.text())
            .then(result => {
                let resultObj = JSON.parse(result);

                //Update state.
                comp.setState({
                    isLoaded: true,
                    projects: resultObj.data.repositoryOwner.pinnedRepositories.edges
                });
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const {projects, isLoaded} = this.state;

        // Make sure ajax is done.
        if (isLoaded) {
            return (
                <div className='project-items-wrapper'>
                    <div className='frow'>
                        {projects.map(item => (
                            <ProjectItem key={item.node.name} itemObj={item.node}/>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div className='center-content'>
                    <ReactLoading color='#a53484'/>
                </div>
            )
        }
    }
}

function ProjectItem(props) {
    let languagesContent = props.itemObj.languages.edges.map(language => (
        <ProjectLanguage key={language.node.id} color={language.node.color} name={language.node.name}/>
    ));
    return (
        <div className="col-sm-1-2">
            <div className="project-item">
                <a href={props.itemObj.url} target="_blank" rel='noopener noreferrer'>
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