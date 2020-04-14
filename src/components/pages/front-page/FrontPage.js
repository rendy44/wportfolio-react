import React from "react";
import './style.scss'
import Masthead from "../../global/masthead/Masthead";
import Section from "../../global/section/Section";
import Button from "../../global/button/Button";
import {Specialization, SpecializationItem} from "../../front-page/specialization/Specialization";
import {Experience, ExperienceItem} from "../../front-page/experience/Experience";
import {Project} from "../../front-page/project/Project";
import ApiGithub from "../../../class/ApiGithub";
import {Activity} from "../../front-page/activity/Activity";
import ApiWordPress from "../../../class/ApiWordPress";
import {RecentPost} from "../../front-page/recent/RecentPost";
import {Contact, ContactItem} from "../../front-page/contact/Contact";

class FrontPage extends React.Component {

    constructor(props) {
        super(props);

        // Define default states.
        this.state = {
            apiGithub: new ApiGithub('rendy44', process.env.REACT_APP_GITHUB_KEY),
            apiWordPress: new ApiWordPress(process.env.REACT_APP_SITE_URL)
        }
    }

    componentDidMount() {
        document.title = 'WPerfekt';
    }

    render() {
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
                    <Project api={this.state.apiGithub}/>
                </Section>
                <Section id='activity' title='Summary Activity'>
                    <Activity api={this.state.apiGithub}/>
                </Section>
                <Section id='posts' title='Recent Posts'>
                    <RecentPost api={this.state.apiWordPress}/>
                </Section>
                <Section id='contact' title='Get in Touch'>
                    <div className='text-center'>
                        <p>If you have projects that need to be get started, you may need some help or just saying hey, let's get in touch.</p>
                        <Contact>
                            <ContactItem icon='mail-send-fill' to='mailto:hello@wperfekt.com'/>
                            <ContactItem icon='whatsapp-fill' to='https://wa.me/6282219186349'/>
                            <ContactItem icon='github-fill' to='https://github.com/rendy44'/>
                            <ContactItem icon='linkedin-box-fill' to='https://www.linkedin.com/in/rendi-dwi-p-792576119'/>
                        </Contact>
                    </div>
                </Section>
            </>
        );
    }
}

export default FrontPage;