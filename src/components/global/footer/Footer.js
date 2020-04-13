import React from "react";
import './style.scss';

function Footer() {
    return (
        <footer className="footer footer-dark">
            <div className='frow-container'>
                <div className="text-center">
                    <p>© 2020 WPerfekt | a Perfekt WordPress Developer</p>
                    <p className="author">Created and Designed by <a href="https://wperfekt.com" target="_blank">WPerfekt</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;