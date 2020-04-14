import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

function Specialization(props) {
    return (
        <div className='focus-items-wrapper'>
            <div className='frow'>
                {props.children}
            </div>
        </div>
    )
}

function SpecializationItem(props) {
    return (
        <div className='col-sm-1-3'>
            <div className="focus-item">
                <div className="icon">
                    <i className={'ri-' + props.icon}></i>
                </div>
                <h3>{props.title}</h3>{props.children}
            </div>
        </div>
    )
}

SpecializationItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
};

export {Specialization, SpecializationItem};