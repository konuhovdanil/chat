import { connect } from 'react-redux';

import { addUsername } from '../actions';
import App from '../App';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddUser: username => dispatch(addUsername(username))
    };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;