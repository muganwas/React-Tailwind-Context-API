import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavButton } from '..';
import { Message, Wallet, Notifications, Person, Caret, Logo } from '../../resources';
import './style.css';

const AvatarWrapper = ({ children, notification, name }) => {
    return (
        <div className="relative">
            <div id={name} className="flex p-1 cursor-pointer">
                {children}
            </div>
            {notification && <span className="block absolute badge bg-primary" />}
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
        <div className="flex max-w-full header-container justify-center items-center">
            <div className='h-8 w-auto md:h-7 sm:h-5 xsm:h-3 flex justify-center items-center' id='logo-container'>
                <a href='/dashboard'>
                    <Logo />
                </a>
            </div>
            <div className="flex justify-end items-center flex-grow">
                <NavButton notificationCount={messages.filter(msg => msg.status === 'new').length} name={'messages'}>
                    <Message className="flex h-6 w-6 md:h-5 md:w-5" fill='#12355F' />
                </NavButton>
                <NavButton notificationCount={transactions.filter(trans => trans.status === 'new').length} name={'wallet'}>
                    <Wallet className="flex h-6 w-6 md:h-5 md:w-5" fill='#12355F' />
                </NavButton>
                <NavButton notificationCount={notifications.filter(notf => !notf.read).length} name={'notifications'}>
                    <Notifications className="flex h-6 w-6 md:h-5 md:w-5" fill='#12355F' />
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
