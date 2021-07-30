import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Question, Plus } from '../../resources';
import { Search, Capsule, MessageSummary } from '..';
import './style.css';

const Filters = [{
    text: 'All',
},
{
    text: 'New',
},
{
    text: 'Ongoing',
}, {
    text: 'Closed',
}];

const MessagesList = ({ activeMessage, updateActiveMessage }) => {
    const info = useSelector(state => state.info);
    const messages = info.messages;
    const unread = messages.filter(msg => msg.status === 'new');
    const unreadTickets = unread.filter(msg => msg.type === 'ticket');
    const unreadMessages = unread.filter(msg => msg.type === 'message');
    const [screenW, updateScreenW] = useState(window.innerWidth);
    const [activeTab, updateActiveTab] = useState('ticket');
    const [filter, updateFilter] = useState('All');
    const onWindowResize = (e) => {
        updateScreenW(e.target.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', onWindowResize);
        return function cleanup() {
            window.removeEventListener('resize', onWindowResize);
        }
    });
    return (
        <div className={`flex flex-col overflow-hidden ${activeMessage !== null && 'sm:hidden'} flex-1 border-r border-gray-light border-solid h-full`}>
            <Search />
            <div className='flex flex-row shadow-md'>
                <div onClick={() => updateActiveTab('message')} className={`flex flex-1 justify-center items-center text-gray-dark cursor-pointer text-md font-semibold tab ${activeTab === 'message' ? 'active' : ''}`}>
                    <span className='flex'>Chat</span>
                    <span className={`flex w-4 h-4 justify-center items-center ml-3 text-sm leading-4 text-white rounded-full tabs-badge ${activeTab === 'message' ? 'active' : ''}`}>{unreadMessages.length}</span>
                </div>
                <div onClick={() => updateActiveTab('ticket')} className={`flex flex-1 justify-center items-center text-gray-dark cursor-pointer text-md font-semibold tab ${activeTab === 'ticket' ? 'active' : ''}`}>
                    <span className='flex'>Tickets</span>
                    <span className={`flex w-4 h-4 justify-center items-center ml-3 text-sm leading-4 text-white rounded-full tabs-badge ${activeTab === 'ticket' ? 'active' : ''}`}>{unreadTickets.length}</span>
                </div>
                <div className='flex w-16 p-3 cursor-pointer flex-grow-0 justify-center items-center'>
                    <Question className='flex' />
                </div>
            </div>
            <div className='flex px-10 py-4 border-bottom border-solid border-gray-light'>
                <div className='flex justify-center text-sm items-center px-3 py-2 w-full rounded-md cursor-pointer font-semibold border border-blue-dark border-solid text-blue-dark'>
                    <Plus className="flex" />
                    <span className='flex ml-4'>{`${'Raise a new ticket'.substring(0, screenW <= 737 ? 5 : screenW <= 837 ? 8 : screenW <= 1000 ? 15 : 20)} ${screenW < 1050 ? '...' : ''}`}</span>
                </div>
            </div>
            <div className='flex flex-wrap justify-start items-center px-5 pb-3'>
                {Filters.map((f, i) => <Capsule key={i} _onClick={() => updateFilter(f.text)} text={f.text} active={filter === f.text} />)}
            </div>
            <div className='flex flex-col h-full overflow-scroll'>
                {messages.filter(message => message.type === activeTab).map((message, i) => <MessageSummary kye={i} _onClick={() => updateActiveMessage(message.id)} key={i} message={message} active={messages[activeMessage] && messages[activeMessage].id === message.id} />)}
            </div>
        </div>
    )
}

MessagesList.propTypes = {
    activeMessage: PropTypes.number,
    updateActiveMessage: PropTypes.func
}

export default MessagesList;
