import React, { Component } from "react";
import propTypes from "prop-types";

class MyComponent extends Component {

    static defaultProps = {
        name : "Default Your Name"
    };

    static propTypes = {
        name : propTypes.string,
        Number : propTypes.number
    };// name의 타입은 무조건 문자열로 전달함을 명시

    render() {
        const {name, Number, children} = this.props

        return (
            <div>
                My name is {name} <br/>
                children is {children} <br/>
                I like this {Number} !
            </div>
        );
    }
}

export default MyComponent;
