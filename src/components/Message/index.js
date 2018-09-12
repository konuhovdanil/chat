import React, {Component} from 'react';

import './style.css';

export default class Message extends Component {

    componentDidUpdate() {
        document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight;
        localStorage.setItem('messages', this.props.users.map(user => user.messages.map(message => message.message)));
        if (localStorage.getItem('messages').length > 0) console.log('local storage messages', localStorage.getItem('messages'));
    }

    render() {
        const messages = [];

        if (this.props.users.length > 0) {
            this.props.users.map(user => user.messages.map(message => {
                messages.push(Object.assign({}, message, {user: user.username}));
            }));
        }

        return (
            <div className="messages clearfix">
                {messages.sort((a, b) => a.timestamp - b.timestamp).map(message => {
                    if (this.props.user === message.user) {
                        return <div className={'message-container clearfix'} key={message.timestamp}>
                            <div className="message my-message">
                                <div className="text">
                                    {message.message}
                                </div>

                                {message.user}
                            </div>
                        </div>
                    } else {
                        return <div className="message" key={message.timestamp}>
                            <div className="text">
                                {message.message}
                            </div>
                            {message.user}
                        </div>
                    }
                })}
            </div>
        )
    }
}