import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const { username, message } = form
    // 복수의 input 처리 -> form 객체 생성하여 선언

    // Setting Event handler
    const onChange = e => {
        const nextForm = {
            ...form, // 기존 (가변 길이) form 내용을 복사함 ( 이 위치 )
            [e.target.name] : e.target.value // 원하는 값 덮어 씌우기
        }
        setForm(nextForm)
    }

    const onClick = () => {
        alert(username + " : " + message)
        setForm({
            username: '',
            message : ''
        })
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>Practice Event!</h1>
            <input
               type="text"
               name="username"
               placeholder="User-Name"
               value={username}
               onChange={onChange}
            />
            <input
               type="text"
               name="message"
               placeholder="Put Your Text Message!"
               value={message}
               onChange={onChange}
               onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>Check!</button>
        </div>
    );

}

export default EventPractice;