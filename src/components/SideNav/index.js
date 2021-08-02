import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { NavButton } from '..';
import { Projects, Helpdesk, Payments, Sites, Message, Team } from '../../resources';
import './style.css';

const SideNav = ({ location, navClass, messages }) => {
    return (
        <nav className='flex flex-col sm:w-20 flex-grow-0 h-full border-r border-solid border-gray-light'>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/projects' ? 'active' : ''}`}>
                <NavButton to='/dashboard/projects' name='projects' label='Projects' >
                    <Projects className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/projects' ? 'active' : ''}`} />
                </NavButton>
            </div>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/help-desk' ? 'active' : ''}`}>
                <NavButton to='/dashboard/help-desk' name='help-desk' label='Help Desk'>
                    <Helpdesk className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/help-desk' ? 'active' : ''}`} />
                </NavButton>
            </div>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/sites' ? 'active' : ''}`}>
                <NavButton to='/dashboard/sites' name='sites' label='Sites'>
                    <Sites className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/sites' ? 'active' : ''}`} />
                </NavButton>
            </div>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/team' ? 'active' : ''}`}>
                <NavButton to='/dashboard/team' name='team' label='Team'>
                    <Team className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/team' ? 'active' : ''}`} />
                </NavButton>
            </div>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/messages' ? 'active' : ''}`}>
                <NavButton notificationCount={messages.filter(msg => msg.status === 'new').length} to='/dashboard/messages' name='messages' label='Messages'>
                    <Message className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/messages' ? 'active' : ''}`} />
                </NavButton>
            </div>
            <div className={`px-6 py-1 ${navClass} ${location.pathname === '/dashboard/payments' ? 'active' : ''}`}>
                <NavButton to='/dashboard/payments' name='payments' label='Payments'>
                    <Payments className={`flex icon w-6 h-6 md:w-5 md:h-5 ${location.pathname === '/dashboard/payments' ? 'active' : ''}`} />
                </NavButton>
            </div>
        </nav>
    )
}

SideNav.propTypes = {
    location: PropTypes.object
}

SideNav.defaultProps = {
    navClass: 'flex flex-col justify-center items-center text-center text-xs nav'
}

export default withRouter(SideNav);
