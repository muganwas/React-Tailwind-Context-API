import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MessagesList, MessageDetails } from '..';
import './style.css';

const Messages = () => {
    const info = useSelector(state => state.info);
    const [activeMessage, updateActiveMessage] = useState(null);
    const onUpdateMessage = id => {
        info?.messages?.map((message, i) => {
            if (message.id === id) updateActiveMessage(i);
            return null;
        });
    }
    return (
        <div className='flex flex-row flex-grow h-full'>
            <MessagesList activeMessage={activeMessage} updateActiveMessage={onUpdateMessage} />
            <MessageDetails activeMessage={activeMessage} message={info?.messages && info.messages[activeMessage]} updateActiveMessage={(v) => updateActiveMessage(v)} />
            <div className='flex flex-1 md:hidden bg-danger'></div>
        </div>
    )
}

export default Messages;
