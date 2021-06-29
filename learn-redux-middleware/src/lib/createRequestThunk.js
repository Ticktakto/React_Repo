import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입 지정
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    
    // dispatch를 인자로 가지는 함수를 반환하는, params를 인자로 가지는 함수를 return
    // params는 dispatch할 함수의 인자, 즉 request에 사용할 인자 ( ex) id, users.. ) 
    return params => async dispatch => {
        dispatch({ type }); // 시작됨
        dispatch(startLoading(type));
        try {
            
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type));
        }
        catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            dispatch(finishLoading(type));
            throw e;
        }

    };
}

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);