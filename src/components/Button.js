import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {active: this.props.active || false};
    }


    render() {

        let style = {};
        style['position'] = this.props.fixed || this.props.absolute;

        return (
            <button onClick={this.props.onClick} className={"bttn " + this.props.className} style={style}>
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    top: 'default',
    bottom: 'default',
    left: 'default',
    right: 'default',
    fixed: 'default',
    absolute: 'default'
};

export default Button;