import React from 'react';
import store from '../store';
import { getUsers, usersDidLoad } from '../action';
import Loader from './Loader'
import UserList from './UserList';

class Users extends React.Component {

    componentDidMount() {        
        if (!this.props.data.isLoaded) {
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => store.dispatch(getUsers(users)))
                .then(store.dispatch(usersDidLoad()))

            }, 2000)
        }
    }

    render() {
        const { users, isLoaded } = this.props.data;
        if(isLoaded) {
            return (
                <UserList users={users} />
            ) 
        } else {
            return (
                <Loader />
            )
        }
    } 
};

export default Users