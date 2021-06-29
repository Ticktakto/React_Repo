import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    // if class components, use ComponentDidMount
    useEffect(() => {
        // 앞에서 배웠듯이, useEffect 파라미터로 넣는 함수는 async 사용 불가능
        // 그 내부에서 따로 async 함수를 선언 & 호출
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch(e) {
                console.log(e); // error 조회
            }
        };
        fn();
    }, [getPost, getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
            />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
) (SampleContainer);