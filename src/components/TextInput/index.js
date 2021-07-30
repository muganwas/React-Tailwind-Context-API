import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TextInput = ({ id, value, icon, placeholder, _onChange, iconContainerClass, containerClass, inputClass }) => {
    return (
        <div className={containerClass}>
            {icon && <span className={iconContainerClass}>{icon}</span>}
            <input id={id} className={inputClass} value={value} onChange={_onChange} placeholder={placeholder} />
        </div>
    )
}

TextInput.propTypes = {
    value: PropTypes.string,
    icon: PropTypes.element,
    placeholder: PropTypes.string,
    _onChange: PropTypes.func,
    inputClass: PropTypes.string,
    containerClass: PropTypes.string,
    iconContainerClass: PropTypes.string
}

TextInput.defaultProps = {
    placeholder: 'Enter text',
    _onChange: () => { },
    containerClass: 'flex flex-row bg-white w-full justify-start items-center px-4 py-2 rounded-md input-container',
    iconContainerClass: 'block mr-2',
    inputClass: 'flex w-full px-1 bg-transparent',
    id: 'text-1'
}

export default TextInput;
