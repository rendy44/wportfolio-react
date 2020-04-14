import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width ? this.props.width : 'col-sm-2-3',
        }
    }

    render() {
        return (
            <section className='section' id={this.state.id}>
                <div className='frow-container'>
                    <div className='frow'>
                        <div className={this.state.width}>
                            <h2 className='section-title'>{this.props.title}</h2>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Section.propTypes = {
    id: PropTypes.string
};

export default Section;