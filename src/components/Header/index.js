import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavButton } from '..';
import { Message, Wallet, Notifications, Person, Caret, Logo } from '../../resources';
import './style.css';

const AvatarWrapper = ({ children, notification, name }) => {
    return (
        <div className="relative">
            <div id={name} className="flex p-1 cursor-pointer lg:m-0.3 md:m-0.5">
                {children}
            </div>
            {notification && <span className="block absolute right-1 bottom-1 h-3 w-3 rounded-full border border-white border-solid bg-primary" />}
        </div>
    )
}

AvatarWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number, PropTypes.node]),
    name: PropTypes.string,
    notification: PropTypes.bool
}

const Header = () => {
    const info = useSelector(state => state.info);
    const messages = info.messages;
    const transactions = info.transactions;
    const notifications = info.notifications;
    const userConfig = info.settings;

    const showMore = () => { };

    return (
        <div className="flex max-w-full border-b border-solid border-gray-light px-10 py-2 justify-center items-center">
            <div className='h-8 w-auto md:h-7 sm:h-5 xsm:h-3 flex justify-center items-center' id='logo-container'>
                <a href='/dashboard'>
                    <Logo />
                </a>
            </div>
            <div className="flex justify-end items-center flex-grow">
                <NavButton containerClass='mr-3 sm:mr-1' notificationCount={messages.filter(msg => msg.status === 'new').length} name={'messages'}>
                    <Message className="flex h-5 w-5 sm:h-4 sm:w-4" fill='#12355F' />
                </NavButton>
                <NavButton containerClass='mr-3 sm:mr-1' notificationCount={transactions.filter(trans => trans.status === 'new').length} name={'wallet'}>
                    <Wallet className="flex h-5 w-5 sm:h-4 sm:w-4" fill='#12355F' />
                </NavButton>
                <NavButton containerClass='mr-3 sm:mr-1' notificationCount={notifications.filter(notf => !notf.read).length} name={'notifications'}>
                    <Notifications className="flex h-5 w-5 sm:h-4 sm:w-4" fill='#12355F' />
                </NavButton>
                <div className="flex ml-3 justify-center items-center">
                    <AvatarWrapper notification={userConfig.filter(conf => !conf.read).length > 0} >
                        <Person className="h-10 w-auto md:h-8 sm:h-6 xsm:h-4" />
                    </AvatarWrapper>
                    <button className="m-1 cursor-pointer" onClick={showMore}>
                        <Caret className="h-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

Header.propsTypes = {};

export default Header;
