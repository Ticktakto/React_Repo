import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// Action & Action Creator
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type : TOGGLE_SWITCH });
const increase = difference => ({ type : INCREASE, difference });
const decrease = () => ({ type : DECREASE });

const initialState = {
    toggle : false,
    counter: 0
};

// Reducer 구현, state -> undefined 일 경우, initialState 가 기본값
function reducer( state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            };
        
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

// Store
const store = createStore(reducer);

// Render, 실제로 Html에 표시하는 함수 -> 이를 store 바뀔 때 마다 수행(redux.subscribe 이용)
const render = () => {
    const state = store.getState();
    // process toggle
    if( state.toggle ) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // process counter
    counter.innerText = state.counter;
};

render();
// 이를 store 바뀔 때 마다 수행(redux.subscribe 이용)
store.subscribe(render);

// Make Action (redux.dispatch 이용)
divToggle.onClick = () => {
    console.log("TOGGLING");
    store.dispatch(toggleSwitch());
}

btnIncrease.onClick = () => {
    console.log("btnIncrease");
    store.dispatch(increase(1));
}

btnDecrease.onClick = () => {
    console.log("btnDecrease");
    store.dispatch(decrease());
};