import React from 'react';
import { Header } from '..';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const dash = useSelector(state => state.dash);
    return (
        <div className="w-full flex-col">
            <Header />
            {dash.title}
        </div>
    )
}

export default Dashboard;
