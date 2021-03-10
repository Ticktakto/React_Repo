import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username : '',
        message : " "
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value // e.target.name => key값!
            // (중요) event 객체 활용 -> 여러 개 input 처리 가능!
        });
    }

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: '',
            message: '' // 다시 초기화 
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Practice Event!</h1>
                <input
                   type="text"
                   name="username"
                   placeholder="User-Name"
                   value= {this.state.username}
                   onChange={this.handleChange}
                
                    />
                <input
                   type="text"
                   name="message"
                   placeholder="Do Texting in here!"
                   value= {this.state.message}
                   onChange={this.handleChange}
                   onKeyPress={this.handleKeyPress}
                
                    />
                <button
                   onClick={this.handleClick}
                >확인</button>    
            </div>
        );
    }
}

export default EventPractice;