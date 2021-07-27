import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../resources';
import Messaging from '@material-ui/icons/QuestionAnswer';
import Wallet from '@material-ui/icons/AccountBalanceWallet';
import Notification from '@material-ui/icons/Notifications';
import './style.css';

const NavWrapper = ({ children, notificationCount, name, to }) => {
    return (
        <div className="relative">
            {notificationCount > 0 && <span className="flex text-xs justify-center items-center absolute bg-primary counter-badge">{notificationCount}</span>}
            <a id={name} href={to || "/"} className="flex p-1 cursor-pointer">
                {children}
            </a>
        </div>
    )
}

NavWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number, PropTypes.node]),
    name: PropTypes.string,
    to: PropTypes.string,
    notificationCount: PropTypes.number
}

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
    const showMore = () => { };
    return (
        <div className="flex max-w-full header-container">
            <div id='logo-container flex-grow-1'>
                <img className='h-8 md:h-7 sm:h-5 xsm:h-3' alt='logo' src={images.logo} />
            </div>
            <div className="flex justify-end items-center flex-grow">
                <NavWrapper notificationCount={5} name={'messages'} to="/messages">
                    <Messaging className="flex icon" />
                </NavWrapper>
                <NavWrapper notificationCount={0} name={'wallet'}>
                    <Wallet className="flex icon" />
                </NavWrapper>
                <NavWrapper notificationCount={10} name={'notifications'}>
                    <Notification className="flex icon" />
                </NavWrapper>
                <div className="flex ml-3 justify-center items-center">
                    <AvatarWrapper notification={true} >
                        <img alt='avatar' className="h-10 w-auto md:h-8 sm:h-6 xsm:h-4" src={images.stockUser} />
                    </AvatarWrapper>
                    <button className="m-1 cursor-pointer" onClick={showMore}>
                        <img alt='more' className="h-2" src={images.caret} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
