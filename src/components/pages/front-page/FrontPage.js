import React from "react";
import './style.scss'
import ReactLoading from 'react-loading';
import Masthead from "../../global/masthead/Masthead";
import Section from "../../global/section/Section";
import Button from "../../global/button/Button";
import {Specialization, SpecializationItem} from "../../front-page/specialization/Specialization";
import {Experience, ExperienceItem} from "../../front-page/experience/Experience";
import {Project, ProjectItem} from "../../front-page/project/Project";
import GithubApi from "../../../class/GithubApi";

class FrontPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isProjectsLoaded: false,
            githubApi: new GithubApi(),
            projects: [],
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
                    isProjectsLoaded: true,
                    projects: resultObj.data.repositoryOwner.pinnedRepositories.edges
                });
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const {projects, isProjectsLoaded} = this.state;
        let projectContent = <div className='center-content'>
            <ReactLoading color='#a53484'/>
        </div>;

        // Modify project content.
        if (isProjectsLoaded) {
            projectContent = <Project>
                {projects.map(item => (
                    <ProjectItem key={item.node.name} itemObj={item.node}/>
                ))}
            </Project>
        }

        return (
            <>
                <Masthead isFront={true} title='Hi, I am Rendy,'>
                    <h2>a WordPress Developer.</h2>
                    <Button to='#contact' variant='success'>Contact me</Button>
                    <Button to='#about' variant='text'>Know more</Button> </Masthead>
                <Section id='about' title='Hi There!'>
                    <div className='text-center'>
                        <p>I am a WordPress Developer based in Yogyakarta, Indonesia. I am passionate to write clean and efficient code but highly customizable.</p>
                    </div>
                </Section>
                <Section id='specialization' title='Specializations'>
                    <Specialization>
                        <SpecializationItem title='WPCS Compliance' icon='check-double-line'>
                            <p>By following WPCS we can expect most of what WordPress can offers.</p>
                        </SpecializationItem>
                        <SpecializationItem title='Customizable' icon='user-settings-line'>
                            <p>Thanks to WordPress hooks, they make development way easier and simpler.</p>
                        </SpecializationItem>
                        <SpecializationItem title='Secure' icon='lock-2-line'>
                            <p>Beautiful and cutting-edge website is worth nothing if it is not secure.</p>
                        </SpecializationItem>
                    </Specialization>
                    <div className='text-center'>
                        <Button to='#contact' variant='outline'>Contact me</Button>
                    </div>
                </Section>
                <Section id='experience' title='Professional Experiences'>
                    <div className="text-center">
                        <p>In general, I have more than 7 years experience as a Software Developer, around more than 4 years as a WordPress Developer.</p>
                    </div>
                    <Experience>
                        <ExperienceItem companyName='Harnods' companyLogo='https://harnods.com/wp-content/uploads/2018/09/harnods-logo.svg' companyUrl='https://harnods.com' companyLocation='Yogyakarta, Indonesia' role='WordPress Developer' dateStart='Apr 2016' dateEnd='Feb 2019'/>
                        <ExperienceItem companyName='SoftwareSeni' companyLogo='https://www.softwareseni.co.id/wp-content/themes/ss-2018/assets/img/extra/softwareseni_logo.svg' companyUrl='https://softwareseni.co.id' companyLocation='Yogyakarta, Indonesia' role='WordPress Developer' dateStart='Feb 2019'/>
                    </Experience>
                </Section>
                <Section id='project' title='Experimental Projects'>
                    {projectContent}
                </Section>
                <Section id='activity' title='Summary Activity'>
                    <div className='text-center'>
                        <span className="activity-count" id="activity-count">881</span>
                        <p>Total contributions between April 6, 2019, to April 12, 2020</p>
                    </div>
                </Section>
            </>
        );
    }
}

export default FrontPage;