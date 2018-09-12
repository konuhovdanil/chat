import React, {Component} from 'react';

import './style.css';

export default class SendMessage extends Component {

    state = {
        messages: [],
        message: ''
    };

    handleChange = (e) => {
        this.setState({message: e.target.value}, () => {
            if (this.state.message !== '' && document.querySelector('.message-input').value !== '') {
                document.querySelector('.send-message').classList.add('active');
            } else {
                document.querySelector('.send-message').classList.remove('active');
            }
        })
    };

    handleSendMessage = e => {
        e.preventDefault();

        this.props.onAddMessage(this.state.message, this.props.user, Math.floor(Date.now()));

        this.setState({message: ''});
        document.querySelector('.message-input').value = '';
        document.querySelector('.send-message').classList.remove('active');

    };

    render() {
        return (
            <form className="type-message">
                <input type="text" className={'message-input'} placeholder={' Type your message. . .'}
                       onChange={e => {
                           this.handleChange(e);
                       }}/>

                <a href="" className={'send-message'} onClick={this.handleSendMessage}>Send</a>
            </form>
        );
    }
}