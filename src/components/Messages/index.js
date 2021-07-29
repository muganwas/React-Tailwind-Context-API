import React from 'react';
//import PropTypes from 'prop-types';
import { MessagesList } from '..';
import './style.css';

const Messages = () => {
    return (
        <div className='flex flex-row h-full flex-grow messages-container'>
            <MessagesList />
            <div className='flex-1'></div>
            <div className='flex-1'></div>
        </div>
    )
}

Messages.propTypes = {

}

export default Messages;
