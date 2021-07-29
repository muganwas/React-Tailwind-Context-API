import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Close, PaperClip, Send, Camera, Smiley, PaperClipAlt } from '../../resources';
import { MessageSummary, TextInput } from '..';
import './style.css';

const MessageDetails = ({ message, updateActiveMessage }) => {
    const [title, updateTitle] = useState();
    useEffect(() => {
        const t = message.type === 'ticket' ? 'Raise a Ticket' : message.type === 'message' ? 'Message' : '';
        updateTitle(t)
    }, [message.type]);
    return (
        <div className='flex flex-col flex-1 msg-bg msg-container'>
            {title &&
                <div className='flex flex-row justify-between p-3 items-center msg-title'>
                    <span>
                        {title}
                    </span>
                <Close onClick={() => updateActiveMessage(null)} className='flex cursor-pointer' />
                </div>
            }
            <div className={`flex flex-col overflow-scroll h-full ${message.from ? 'items-end' : 'items-start'}`}>
                {message && message.type === 'ticket' &&
                    <>
                        <div className='flex flex-col rounded-md mt-6 mr-3 overflow-hidden justify-start items-start ticket'>
                            <div className='flex flex-col justify-between h-32 w-80 ticket-top'>
                                <div className='flex justify-between mt-2 text-xs text-white'>
                                    <span
                                        style={{ backgroundColor: message.status === 'new' ? '#3498DB' : message.status === 'ongoing' ? '#2ECC71' : '#E74C3C' }}
                                        className='flex px-2 py-1 text-center leading-3 justify-center items-center rounded-r-lg'
                                    >
                                        {message.status}
                                    </span>
                                <span className='flex px-2 py-1 rounded-lg bg-black bg-opacity-30 mr-2 justify-center items-center'>1/3</span>
                                </div>
                                <div className='flex justify-between mb-2 text-xs text-white'>
                                <span className='flex px-2 py-1 rounded-lg bg-black bg-opacity-30 ml-2 justify-center items-center'>
                                        {message.location}
                                    </span>
                                <span className='flex px-2 py-1 rounded-lg bg-black bg-opacity-30 mr-2 justify-center items-center'>
                                        <PaperClip className='mr-1' />
                                        <span>{message.count}</span>
                                    </span>
                                </div>
                            </div>
                            <MessageSummary message={message} inMessage />
                        </div>
                        <span className='flex mr-4 text-secondary text-xs mt-1'>{moment(moment.now()).format('hh:mm a')}</span>
                    </>
                }
            </div>
            {message && message.type && <div className='flex bg-white'>
                <TextInput
                    containerClass='flex flex-row bg-white w-full justify-start items-center px-4 py-2 message-input-container'
                    icon={<span className='flex msg-input-prefix pr-2'><Smiley className='w-5' /></span>}
                    placeholder='Write here'
                />
                <div className='flex pr-2 my-2 mr-2 attachments-container'>
                    <button>
                        <Camera />
                    </button>
                    <button>
                        <PaperClipAlt />
                    </button>
                </div>
                <button className='px-2'>
                    <Send />
                </button>
            </div>}
        </div>
    )
}

MessageDetails.propTypes = {
    message: PropTypes.object,
    updateActiveMessage: PropTypes.func
}

MessageDetails.defaultProps = {
    message: {}
}

export default MessageDetails;
