import React from 'react';
import PropTypes from 'prop-types';
import { Play, Pause, Phone, Kebab } from '../../resources';
import './style.css';

const MessageSummary = ({ message, active, _onClick }) => {
    return (
        <div onClick={_onClick} className={`flex flex-col w-full py-5 px-5 cursor-pointer summary-container ${active ? 'active' : ''}`}>
            <div className='flex flex-row my-1 justify-start items-center'>
                {message.status === 'closes' || message.status === 'new' ?
                    <Play className='h-4 w-4 status-icon' /> :
                    <Pause className='h-4 w-4 status-icon' />
                }
                <span className='flex flex-grow ml-2 text-md font-medium'>{message.issue} issue</span>
                {message.count > 0 && <span className={`flex w-4 h-4 justify-center items-center ml-2 text-xs tabs-badge active`}>{message.count}</span>}
                <Kebab className='flex ml-2' />
            </div>
            <div className='flex text-sm my-1 justify-between items-center'>
                <div className='flex text-sm'><span className='flex text-secondary'>Requested by</span><span className='text-primary ml-1'>{message.from}</span></div>
                <Phone className='flex' />
            </div>
            <div className='flex flex-row my-1 text-xs items-center'>
                <span className='flex text-secondary mr-1'>Team:</span>
                <span className='flex'>{message.team}</span>
            </div>
            <div className='flex flex-row text-xs my-1 justify-between items-center'>
                <div className='flex flex-row text-xs items-center'>
                    <span className='flex text-secondary mr-1'>Location:</span>
                    <span className='flex'>{message.location}</span>
                </div>
                <div className='flex flex-row text-xs items-center'>
                    <span className='flex text-secondary mr-1'>Site ID:</span>
                    <span className='flex'>{message.siteId}</span>
                </div>
            </div>
            <div className='flex flex-row text-xs my-1 justify-between items-center'>
                <div
                    style={{ backgroundColor: message.status === 'new' ? '#3498DB' : message.status === 'ongoing' ? '#2ECC71' : '#E74C3C' }}
                    className='flex flex-row text-xs items-center status-capsule px-1 rounded-full text-white capitalize'>
                    {message.status}
                </div>
                <div className='flex flex-row text-xs items-center'>
                    <span className='flex text-secondary mr-1'>{message.time} hours</span>
                </div>
            </div>
        </div>
    )
};

MessageSummary.propTypes = {
    message: PropTypes.object,
    active: PropTypes.bool,
    _onClick: PropTypes.func
};

MessageSummary.defaultProps = {
    active: false,
    _onClick: () => { }
}

export default MessageSummary;
