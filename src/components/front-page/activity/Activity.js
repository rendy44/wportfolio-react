import React from "react";
import './style.scss';
import ReactLoading from "react-loading";
import Helper from "../../../class/Helper";

class Activity extends React.Component {
    constructor(props) {
        super(props);

        // Init default state.
        this.state = {
            apiGithub: this.props.api,
            isLoaded: false,
            activityTotal: 0,
            activityStart: '',
            activityEnd: ''
        }
    }

    componentDidMount() {
        const comp = this;
        this.state.apiGithub.getActivity()
            .then(response => response.text())
            .then(result => {
                let resultObj = JSON.parse(result);
                const {startedAt, endedAt, contributionCalendar} = resultObj.data.user.contributionsCollection;

                //Update state.
                comp.setState({
                    isLoaded: true,
                    activityTotal: contributionCalendar.totalContributions,
                    activityStart: startedAt,
                    activityEnd: endedAt
                });
            })
            .catch(error => console.log('error', error));
    }

    convertActivityDate(str) {
        let objDate = new Date(str);
        return Helper.getMonthName(objDate.getMonth()) + ' ' + objDate.getDate() + ' ' + objDate.getFullYear();
    }

    render() {
        const {activityTotal, activityStart, activityEnd, isLoaded} = this.state;

        // Make sure ajax is done.
        if (isLoaded) {
            return (
                <div className='text-center'>
                    <span className="activity-count" id="activity-count">{activityTotal}</span>
                    <p>Total contributions between {this.convertActivityDate(activityStart)}, to {this.convertActivityDate(activityEnd)}</p>
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

export {Activity};