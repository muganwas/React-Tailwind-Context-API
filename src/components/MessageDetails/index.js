import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { cloneDeep } from 'lodash';
import { useSelector } from 'react-redux';
import { Close, PaperClip, Send, Camera, Smiley, PaperClipAlt } from '../../resources';
import { MessageSummary, TextInput } from '..';
import './style.css';

const MessageDetails = ({ activeMessage, message, updateActiveMessage }) => {
    const user = useSelector(state => state.user);
    const [title, updateTitle] = useState();
    const [inputValue, updateInputValue] = useState('');
    const [messages, updateMessages] = useState([]);

    useEffect(() => {
        const input = document.getElementById('message-input');
        if (input) {
            input.addEventListener("keyup", onKeyUp)
            return function cleanup() {
                input.removeEventListener("keyup", onKeyUp);
            }
        }
    });

    const onKeyUp = (event) => {
        let code;
        if (event.key !== undefined) {
            code = event.key;
        } else if (event.keyIdentifier !== undefined) {
            code = event.keyIdentifier;
        } else if (event.keyCode !== undefined) {
            code = event.keyCode;
        }
        if (code === 13 || code === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    useEffect(() => {
        const t = message.type === 'ticket' ? 'Raise a Ticket' : message.type === 'message' ? 'Message' : '';
        updateMessages([]);
        updateTitle(t);
    }, [message.id, message.type]);

    const onTextChange = e => {
        const value = e.target.value;
        updateInputValue(value);
    };

    const sendMessage = () => {
        if (inputValue) {
            const newMessages = cloneDeep(messages);
            const newMessage = { text: inputValue, user, timestamp: moment.now(), time: moment(moment.now()).format('hh:mm a') };
            newMessages.push(newMessage);
            updateMessages(newMessages);
            updateInputValue('');
        }
    };

    return (
        <div className={`flex flex-col overflow-hidden flex-1 ${activeMessage === null && 'sm:hidden'} msg-bg msg-container`}>
            {
                title &&
                <div className='flex flex-row flex-1 justify-between p-5 items-center msg-title'>
                    <span>
                        {title}
                    </span>
                    <Close onClick={() => updateActiveMessage(null)} className='flex cursor-pointer' />
                </div>
            }
            <div className='flex flex-col h-full overflow-scroll'>
                {
                    message && message.type === 'ticket' &&
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col flex-shrink-0 rounded-md overflow-hidden mt-6 mr-3 lg:ml-3 justify-start items-start ticket'>
                            <div className='flex flex-col justify-between h-32 lg:h-28 md:h-24 xlg:w-80 lg:w-60 md:w-full h-32 ticket-top'>
                                <div className='flex justify-between mt-2 text-xs text-white'>
                                    <span
                                        style={{ backgroundColor: message.status === 'new' ? '#3498DB' : message.status === 'ongoing' ? '#2ECC71' : '#E74C3C' }}
                                        className='flex px-2 py-1 text-center leading-3 justify-center items-center rounded-r-lg'>
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
                    </div>
                }
                {
                    messages.length > 0 &&
                    <div id='responses' className='flex flex-col'>
                        {messages.map((msg) => {
                            return (
                                <div className={`flex flex-col mr-3 ml-3 mt-3 text-xs ${msg.user.id === user.id ? 'items-end' : 'items-start'}`} key={msg.timestamp}>
                                    <span className='text-left msg-bubble p-2 rounded-md bg-white'>{msg.text}</span>
                                    <span className='mr-1 mt-1 text-secondary'>{msg.time}</span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            {
                message && message.type &&
                <div className='flex flex-1 bg-white'>
                    <TextInput
                        id='message-input'
                        _onChange={onTextChange}
                        value={inputValue}
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
                    <button onClick={sendMessage} className='px-2'>
                        <Send />
                    </button>
                </div>
            }
        </div>
    )
}

MessageDetails.propTypes = {
    message: PropTypes.object,
    activeMessage: PropTypes.number,
    updateActiveMessage: PropTypes.func
}

MessageDetails.defaultProps = {
    message: {}
}

export default MessageDetails;
