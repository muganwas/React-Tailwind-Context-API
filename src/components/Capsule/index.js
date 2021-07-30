import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Capsule = ({ text, _onClick, containerClass, active }) => {
    return (
        <div onClick={_onClick && _onClick} className={`${containerClass} ${active ? 'active' : ''}`}>
            {text}
        </div>
    )
}

Capsule.propTypes = {
    containerClass: PropTypes.string,
    _onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool
};

Capsule.defaultProps = {
    containerClass: 'flex px-5 py-1 font-semibold text-xs rounded-full mx-2 mt-3 capsule-container cursor-pointer',
}

export default Capsule;
