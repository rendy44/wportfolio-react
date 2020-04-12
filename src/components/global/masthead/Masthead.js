import React from "react";
import './style.scss'

class Masthead extends React.Component {
    constructor(props) {
        super(props);

        // Define default state var.
        let defaultState = {
            isFront: false,
            className: 'masthead'
        };

        // Maybe modify state var.
        if (this.props.isFront) {
            defaultState.isFront = true;
            defaultState.className += ' masthead-front-page';
        }

        // Define default state.
        this.state = defaultState;
    }

    render() {
        return (
            <section className={this.state.className}>
                <div className='frow-container'>
                    <div className='frow'>
                        <div className='col-md-2-3'>
                            <h1>{this.props.title}</h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Masthead;