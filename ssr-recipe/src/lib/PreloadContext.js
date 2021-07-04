import { createContext, useContext } from "react"; 

// client 환경 : null

// server 환경 : { done: false, promises: [] }
const PreloadContext =  createContext(null);
export default PreloadContext;

// resolve는 함수 타입
export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null; // preloadContext 값이 유효하지 않은 경우, 아무것도 수행 X
    if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 수행 X

    //promises 배열에 promise 등록
    // 설령 resolve 함수가 프로미스를 반환하지 않아도, 프로미스 취급을 하기 위해
    // Promise.resolve 함수 사용
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};
