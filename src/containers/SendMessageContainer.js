import {connect} from 'react-redux';

import {addMessage} from '../actions';
import SendMessage from '../components/SendMessage';

function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddMessage: (text, username, timestamp) => dispatch(addMessage(text, username, timestamp))
    };
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;