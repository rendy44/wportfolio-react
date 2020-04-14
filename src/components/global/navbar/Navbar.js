import React from "react";
import './style.scss';
import {Link} from "react-router-dom";
import {ContactItem} from "../../front-page/contact/Contact";

function TopNav(props) {
    return (
        <nav className="nav">
            <div className="frow-container">
                <div className="brand">
                    <Link to='/'>Rendy</Link>
                </div>
                <ul className="contact-items-wrapper">
                    <ContactItem icon='mail-send-fill' to='mailto:hello@wperfekt.com'/>
                    <ContactItem icon='whatsapp-fill' to='https://wa.me/6282219186349'/>
                    <ContactItem icon='github-fill' to='https://github.com/rendy44'/>
                    <ContactItem icon='linkedin-box-fill' to='https://www.linkedin.com/in/rendi-dwi-p-792576119'/>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav;