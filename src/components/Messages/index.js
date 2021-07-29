import React, { useState } from 'react';
import { MessagesList } from '..';
import './style.css';

const Messages = () => {
    const [activeMessage, updateActiveMessage] = useState();
    return (
        <div className='flex flex-row h-full flex-grow messages-container'>
            <MessagesList activeMessage={activeMessage} updateActiveMessage={(v) => updateActiveMessage(v)} />
            <div className='flex-1 bg-gray-500'></div>
            <div className='flex-1 bg-gray-600'></div>
        </div>
    )
}

export default Messages;
