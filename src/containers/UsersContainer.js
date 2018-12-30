import { connect } from 'react-redux';
import Users from '../components/Users';


function mapStateToProps(state) {
    return {
        data: state.data
    }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;