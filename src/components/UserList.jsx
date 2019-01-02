import React from 'react';
import NotFound from './NotFound';

const UserList = ({users}) => {

    if( users.length ) {
        return (
        <ul className="main-content">
            {users.map((user, i) => <li key={user.id}>
                                        в хату заходит челик №{i + 1}, под именем {user.name}, a.k.a {user.username}
                                    </li>)}
        </ul>
        )
    } else {
        return (
            <NotFound/>
        )
    }

};

export default UserList;