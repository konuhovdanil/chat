import {connect} from 'react-redux';

import Message from '../components/Message';

function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.user
    };
}

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;