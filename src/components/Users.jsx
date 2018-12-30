import React from 'react';
import store from '../store';
import { getUsers, usersDidLoad } from '../action';
import Loader from './Loader'

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
        const { users } = this.props.data

        if(users.length) {
            return (
                <ul className="main-content">
                    {users.map((user, i) => <li key={user.id}>в хату заходит челик №{i+1}, под именем {user.name}</li>)}
                </ul>
            ) 
        } else {
            return (
                <Loader />
            )
        }
    } 
};

export default Users