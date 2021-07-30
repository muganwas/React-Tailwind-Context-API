import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '..';
import { SearchIcon, Arrow } from '../../resources';
import './style.css';

const Search = ({ containerClass }) => {
    return (
        <div className={containerClass}>
            <div className='flex flex-grow'>
                <TextInput placeholder='Search' icon={<SearchIcon />} />
            </div>
            <div className='flex flex-col w-16 justify-center items-center'>
                <Arrow className='mb-3 cursor-pointer' />
                <Arrow className='cursor-pointer' transform='rotate(180)' />
            </div>
        </div>
    )
}

Search.propTypes = {
    containerClass: PropTypes.string,
}

Search.defaultProps = {
    containerClass: 'flex p-3 bg-gray-light'
}

export default Search;
