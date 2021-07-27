import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const dash = useSelector(state => state.dash);
    return (
        <div>
            {dash.title}
        </div>
    )
}

export default Dashboard;
