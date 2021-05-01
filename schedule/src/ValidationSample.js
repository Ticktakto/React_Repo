import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        // "focus" => 버튼 클릭 시 -> input tag를 선택 -> input을 바로 입력받을 수 있게 함
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                // Add Ref, input tag will reference 
                ref={(ref) => this.input=ref}
                
                className={this.state.clicked ? (this.state.validated ? 'success' :
                'faliure') : ''}
                ></input>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
