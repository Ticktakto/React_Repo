import React, {Component} from 'react';

class Counter extends Component {
    
    constructor(props) {
        super(props);
        //초깃값 setting
        this.state = {
            number : 0,
            notChanged : 0
        };
    } // Component 생성자, 반드시 super 호출 필수 (부모 컴포넌트 생성자 함수 호출)

    render() {
        const { number, notChanged } = this.state; // this.state로 state 조회
        return(
        <div>
            <h1>{number}</h1>
            <h2>NO CHANGE! : {notChanged}</h2>
            <button onClick = { () => {
                // setState로 state 변경, 갱신 가능
                this.setState({ number: number + 1})
            }}>
                +1
            </button>
        </div>
        );
    }
}

export default Counter;