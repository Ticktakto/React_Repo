import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
    {id: 1, text: '눈사람'},
    {id: 2, text: '얼음'},
    {id: 3, text: '눈'},
    {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가 시 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        // concat => array 이어주는 내장함수(새로운 배열을 생성하여)
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNextId(nextId + 1); // id update (+1)
        setNames(nextNames); // names update (name add)
        setInputText(''); // inputText 비우기
    };

    const nameList = names.map( name => <li key={name.id}>{name.text}</li>);
    return (
    <>
    <input value={inputText} onChange={onChange}/>
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
    </>
    );
}

export default IterationSample;