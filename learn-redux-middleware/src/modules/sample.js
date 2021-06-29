import { handleActions } from "redux-actions";
import * as api from '../lib/api';

// 액션 타입 선언
// 한 요청 당 세 개를 만들어야 함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// make Thunk function
// thunk 함수는 내부에서 시작할 때, 성공했을 때, 실패했을 떄 각각 다른 액션을 디스패치

export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST }); // start response
    try {
        const response = await api.getPost(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        }); // 요청 성공
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        }); // error 발생
        throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
    } 
};

export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS }); // start response
    try {
        const response = await api.getUsers();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {   
            dispatch({
                type: GET_USERS_FAILURE,
                payload: e,
                error: true
            })
            throw e;
    }
};

// setting initial state
// 요청의 로딩 중 상태는 loading 이라는 객체가 관리

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = handleActions (
    {
    [GET_POST]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: true // start response
        }
    }),

    [GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false // 요청 완료
        },
        post: action.payload
    }),

    [GET_POST_FAILURE]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false // 요청 완료
        }
    }),

    [GET_USERS]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: true
        }
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        },
        users: action.payload
    }),

    [GET_USERS_FAILURE]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        }
    }),
    },
    initialState
);

export default sample;