import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message : " "
    }
    render() {
        return (
            <div>
                <h1>Practice Event!</h1>
                <input
                   type="text"
                   name="message"
                   placeholder="Do Texting in here!"
                   value= {this.state.message}
                   onChange={
                       (e) => {
                           this.setState({
                               message : e.target.value
                           })
                       }
                   }
                
                    />

                <button
                   onClick={() => {
                       alert(this.state.message);
                       this.setState({
                           message: '' // 다시 초기화
                       });
                   }}
                >확인</button>    
            </div>
        );
    }
}

export default EventPractice;