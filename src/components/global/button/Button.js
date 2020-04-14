import React from "react";
import './style.scss'
import PropTypes from 'prop-types';

function Button(props) {

    // Define default state.
    let state = {
        isLink: props.isLink ? props.isLink : true,
        className: 'button'
    };

    // Maybe add variant.
    if (props.variant) {
        state.className += ' button-' + props.variant;
    }

    if (state.isLink) {
        return (
            <a href={props.to} className={state.className}>{props.children}</a>
        );
    } else {
        return (
            <button type='button' className={state.className}>{props.children}</button>
        );
    }
}

Button.propTypes = {
    to: PropTypes.string
};

export default Button;