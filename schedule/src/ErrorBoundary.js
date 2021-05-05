import React, {Component} from 'react';

class ErrorBoundary extends Component{

    state = {
        error : false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info});
    }

    render() {
        if(this.state.error ) return <div>에러가 발생했습니다!</div>
        // this.props => App.js -> children => ErrorBoundary 태그 안의 요소를 의미
        return this.props.children;
    }
}

export default ErrorBoundary;