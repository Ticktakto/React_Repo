const loggerMiddleware = store => next => action => {
    console.group(action && action.type); // action type으로 log를 그룹화
    console.log('이전 상태', store.getState());
    console.log('Action :', action);

    next(action); // Send 'action' to next middleware or reducer
    console.log('다음 상태', store.getState());
    console.groupEnd(); // group end
};

export default loggerMiddleware;