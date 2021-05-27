import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    velopert: {
        name : 'Daun',
        description : 'Learning React'
    },
    gildong: {
        name : 'Gil-Dong',
        description: '고전 소설 주인공'
    }
};

const Profile = ({match}) => {
    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자!</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <h3>
                <p>{profile.description}</p>
            </h3>
            <WithRouterSample />
        </div>
    )
};

export default Profile;