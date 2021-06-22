import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당 -> todos 분리 & state.todos.input 대신 todos.input 이용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }) ,
    {   // 받은 함수를 객체화 처리 -> redux의 bindActionCreator 함수가 처리!
        changeInput,
        insert,
        toggle,
        remove
    }
) (TodosContainer);