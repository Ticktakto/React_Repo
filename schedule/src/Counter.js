import React, {Component} from 'react';

class Counter extends Component {
    
    state = {
        number : 0,
        notChanged : 1
    }

    render() {
        const { number, notChanged } = this.state; // this.state로 state 조회
        return(
        <div>
            <h1>{number}</h1>
            <h2>NO CHANGE! : {notChanged}</h2>
            <button onClick = { () => {
                // setState로 state 변경, 갱신 가능
               this.setState(
                   { 
                       number: number + 1
                    },
                   ()=> {
                    console.log('Call setState!')
                    console.log(this.state)
                   });
            }}>
                +1
            </button>
        </div>
        );
    }
}

export default Counter;