import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Question, Plus } from '../../resources';
import { Search } from '..';
import './style.css';

const MessagesList = () => {
    const info = useSelector(state => state.info);
    const messages = info.messages;
    const unread = messages.filter(msg => msg.status === 'new');
    const unreadTickets = unread.filter(msg => msg.type === 'ticket');
    const unreadMessages = unread.filter(msg => msg.type === 'message');
    const [activeTab, updateActiveTab] = useState('tickets');
    return (
        <div className='flex flex-col flex-1 messages-list-container'>
            <Search />
            <div className='flex flex-row tab-container'>
                <div onClick={() => updateActiveTab('chats')} className={`flex flex-1 justify-center items-center tab ${activeTab === 'chats' ? 'active' : ''}`}>
                    <span className='flex'>Chat</span>
                    <span className={`flex w-4 h-4 justify-center items-center ml-3 tabs-badge ${activeTab === 'chats' ? 'active' : ''}`}>{unreadMessages.length}</span>
                </div>
                <div onClick={() => updateActiveTab('tickets')} className={`flex flex-1 justify-center items-center tab ${activeTab === 'tickets' ? 'active' : ''}`}>
                    <span className='flex'>Tickets</span>
                    <span className={`flex w-4 h-4 justify-center items-center ml-3 tabs-badge ${activeTab === 'tickets' ? 'active' : ''}`}>{unreadTickets.length}</span>
                </div>
                <div className='flex flex-grow-0 w-16 p-3 cursor-pointer justify-center items-center'>
                    <Question className='flex' />
                </div>
            </div>
            <div className='flex px-10 py-4 new-ticket-container'>
                <div className='flex justify-center items-center px-3 py-2 w-full rounded-md cursor-pointer new-ticket'>
                    <Plus />
                    <span className='flex ml-4'>Raise a new ticket</span>
                </div>
            </div>
            <div className='flex justify-center'>
            </div>
        </div>
    )
}

MessagesList.protoTypes = {

}

export default MessagesList;
