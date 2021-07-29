import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MessagesList, MessageDetails } from '..';
import './style.css';

const Messages = () => {
    const info = useSelector(state => state.info);
    const [activeMessage, updateActiveMessage] = useState();
    return (
        <div className='flex flex-row flex-grow messages-container'>
            <MessagesList activeMessage={activeMessage} updateActiveMessage={(v) => updateActiveMessage(v)} />
            <MessageDetails message={info?.messages && info.messages[activeMessage]} />
            <div className='flex flex-grow msg-bg'></div>
        </div>
    )
}

export default Messages;
