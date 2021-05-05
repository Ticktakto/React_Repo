import React, {Component} from 'react';

class LifeCycleSample extends Component {

    // state 
    state = {
        number : 0,
        color : null
    }

    // ref
    myRef = null;

    // constructor
    constructor(props) {
        super(props);
        console.log('constructor - initialize component')
    }

    //componentDidMount
    componentDidMount() {
        console.log('componentDidMount');
    }

    //shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자 마지막 자리 4 ==> 리렌더링 하지 않는 조건 추가
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        // this.state.number (현재 상태 number) + 1 => setState로 갱신
        this.setState({
            number : this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전의 색상 : ', snapshot );
        }
    }

    render() {
        console.log('render');

        // App.js(부모) getRandom -> color 
        const style = {
            color : this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p> color: {this.state.color}</p>
                <button onClick={this.handleClick}> 더하기 </button>
            </div>
        );
    }
}

export default LifeCycleSample;