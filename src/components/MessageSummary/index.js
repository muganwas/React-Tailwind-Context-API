import React from 'react';
import PropTypes from 'prop-types';
import { Play, Pause, Phone, Kebab } from '../../resources';
import './style.css';

const MessageSummary = ({ message, active, _onClick, inMessage }) => {
    return (
        <div onClick={_onClick && _onClick} className={`flex flex-col w-full summary-container ${active ? 'active' : ''} ${!inMessage ? 'py-5 px-5 cursor-pointer' : 'py-2 px-2'}`}>
            <div className='flex flex-row my-0.2 justify-start items-center'>
                {
                    !inMessage &&
                    <>
                        {
                            message.status === 'closes' || message.status === 'new' ?
                                <Play className='h-4 w-4 status-icon' /> :
                                <Pause className='h-4 w-4 status-icon' />
                        }
                    </>
                }
                <span className={`flex flex-grow text-sm font-medium ${!inMessage && 'ml-2'}`}>{message.issue} issue</span>
                {!inMessage && message.count > 0 && <span className={`flex w-4 h-4 justify-center items-center ml-2 text-xs tabs-badge active`}>{message.count}</span>}
                {!inMessage && <Kebab className='flex ml-2' />}
            </div>
            <div className='flex text-xs my-0.2 justify-between items-center'>
                <div className='flex'>
                    <span className='flex text-secondary'>Requested by</span>
                    <span className='text-primary ml-1 text-semibold'>{message.from}</span>
                </div>
                {!inMessage && <Phone className='flex' />}
            </div>
            <div className='flex flex-row my-0.2 text-xs items-center'>
                <span className='flex text-secondary mr-1'>Team:</span>
                <span style={inMessage ? { color: '#11616C', fontWeight: '600' } : {}} className='flex'>{message.team}</span>
            </div>
            <div className='flex flex-row text-xs my-0.2 justify-between items-center'>
                <div className='flex flex-row text-xs items-center'>
                    <span className='flex text-secondary mr-1'>Location:</span>
                    <span style={inMessage ? { color: '#11616C', fontWeight: '600' } : {}} className='flex'>{message.location}</span>
                </div>
                <div className='flex flex-row text-xs items-center'>
                    <span className='flex text-secondary mr-1'>Site ID:</span>
                    <span style={inMessage ? { color: '#11616C', fontWeight: '600' } : {}} className='flex'>{message.siteId}</span>
                </div>
            </div>
            <div className='flex flex-row text-xs my-0.5 justify-between items-center'>
                <div
                    style={!inMessage ? { backgroundColor: message.status === 'new' ? '#3498DB' : message.status === 'ongoing' ? '#2ECC71' : '#E74C3C' } : { color: '#888' }}
                    className={`flex flex-row text-xs items-center status-capsule rounded-full capitalize ${!inMessage && 'text-white px-1'}`}>
                    {`${!inMessage ? message.status : 'Status: '}`}
                    {inMessage && <span style={{ color: '#11616C', fontWeight: '600' }} className='flex ml-1'>Created</span>}
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
    _onClick: PropTypes.func,
    inMessage: PropTypes.bool
};

MessageSummary.defaultProps = {
    active: false,
}

export default MessageSummary;
