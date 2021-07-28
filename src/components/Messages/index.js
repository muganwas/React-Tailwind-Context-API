import React from 'react';
import { MessagesList } from '..';
import PropTypes from 'prop-types';

const Messages = () => {
    return (
        <div className='flex flex-row flex-grow-1'>
            <MessagesList />
        </div>
    )
}

Messages.propTypes = {

}

export default Messages;
