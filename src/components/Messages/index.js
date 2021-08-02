import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { messagesAPI, notificationsAPI, transactionsAPI, configurationAPI } from '../../api';
import { MessagesList, MessageDetails } from '..';
import './style.css';
import { MyContext } from '../../context';

const MessagesListComponent = (props) => <MyContext.Consumer>{context => <MessagesList {...props} {...context} />}</MyContext.Consumer>;
const MessageDetailsComponent = (props) => <MyContext.Consumer>{context => <MessageDetails {...props} {...context} />}</MyContext.Consumer>;

const Messages = ({
    messages,
    updateMessages,
    updateNotifications,
    updateTransactions,
    updateSettings
}) => {
    //const info = useSelector(state => state.info);
    const [activeMessage, updateActiveMessage] = useState(null);
    useEffect(() => {
        if (!isEqual(messages, messagesAPI)) {
            updateMessages(messagesAPI);
            updateNotifications(notificationsAPI);
            updateTransactions(transactionsAPI);
            updateSettings(configurationAPI);
        }
    })
    const onUpdateMessage = id => {
        messages?.map((message, i) => {
            if (message.id === id) updateActiveMessage(i);
            return null;
        });
    }
    return (
        <div className='flex flex-row flex-grow h-full'>
            <MessagesListComponent activeMessage={activeMessage} updateActiveMessage={onUpdateMessage} />
            <MessageDetailsComponent activeMessage={activeMessage} message={messages && messages[activeMessage]} updateActiveMessage={(v) => updateActiveMessage(v)} />
            <div className='flex flex-1 md:hidden bg-danger'></div>
        </div>
    )
}

export default Messages;
