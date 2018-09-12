import React from 'react';

import './style.css';
import background from '../../images/chat-bg.jpg';
import MessageContainer from "../../containers/MessageContainer";
import SendMessageContainer from "../../containers/SendMessageContainer";

export default function Chat() {
    return (
        <div className="chat" style={{backgroundImage: `url(${background})`}}>
            <header className="chat-header">
                Тестовое задание
            </header>

            <MessageContainer/>

            <SendMessageContainer/>
        </div>
    );
}