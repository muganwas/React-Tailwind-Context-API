import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { UPDATE_MESSAGES, UPDATE_NOTIFICATIONS, UPDATE_TRANSACTIONS, UPDATE_SETTINGS_INFO } from '../../redux/types';
import { SideNav, Messages } from '..';
import { messagesAPI, notificationsAPI, transactionsAPI, configurationAPI } from '../../api';

const MessagesComponent = (props) => <Messages {...props} />;
const DefaultComponent = () => <div>Base</div>;

const Dashboard = () => {
    const dispatch = useDispatch();
    const [height, updateHeight] = useState(window.innerHeight);
    const onResize = e => updateHeight(e.target.innerHeight);
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return function cleanup() {
            window.removeEventListener('resize', onResize);
        }
    })
    useEffect(() => {
        dispatch({ type: UPDATE_MESSAGES, payload: messagesAPI });
        dispatch({ type: UPDATE_NOTIFICATIONS, payload: notificationsAPI });
        dispatch({ type: UPDATE_TRANSACTIONS, payload: transactionsAPI });
        dispatch({ type: UPDATE_SETTINGS_INFO, payload: configurationAPI });
    }, [dispatch]);
    return (
        <div style={{ height: height - 65 }} className="w-full overflow-hidden h-full flex flex-col">
            <div className="flex flex-1 flex-row h-full">
                <SideNav />
                <div className='flex flex-row flex-grow'>
                    <Switch>
                        <Route exact path='/dashboard/' component={DefaultComponent} />
                        <Route exact path='/dashboard/messages' component={MessagesComponent} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
