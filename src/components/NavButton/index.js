import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const NavButton = ({ children, notificationCount, name, to, _onClick, label, labelPosition, containerClass, badge_class, label_class }) => {
    return (
        <>
            {label && labelPosition === 'top' && <span className={label_class}>{label}</span>}
            <div className={`flex flex-col relative justify-center items-center ${containerClass}`}>
                {notificationCount > 0 && <span className={`flex text-xs justify-center items-center absolute bg-primary h-4 w-4 md:h-3 md:w-3 ${badge_class}`}>{notificationCount}</span>}
                {
                    to && !_onClick ?
                        <Link
                            id={name}
                            to={to || "/"}
                            className="flex p-1 cursor-pointer">
                            {children}
                        </Link> :
                        <button onClick={_onClick} className="flex p-1 cursor-pointer">
                            {children}
                        </button>
                }
            </div>
            {label && labelPosition === 'bottom' && <span className={label_class}>{label}</span>}
        </>
    )
}

NavButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number, PropTypes.node]),
    name: PropTypes.string,
    _onClick: PropTypes.func,
    to: PropTypes.string,
    notificationCount: PropTypes.number,
    label: PropTypes.string,
    label_class: PropTypes.string,
    badge_class: PropTypes.string,
    containerClass: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'bottom'])
}

NavButton.defaultProps = {
    labelPosition: 'bottom',
    badge_class: 'counter-badge',
    label_class: 'nav-button-label'
}

export default NavButton;