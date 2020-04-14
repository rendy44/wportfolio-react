import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <ul className='contact-items-wrapper'>
            {props.children}
        </ul>
    )
}

function ContactItem(props) {
    return (
        <li className="contact-item">
            <a href={props.to} target="_blank" rel='noopener noreferrer'><i className={'ri-' + props.icon}></i></a>
        </li>
    )
}

ContactItem.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.string,
};
export {Contact, ContactItem};