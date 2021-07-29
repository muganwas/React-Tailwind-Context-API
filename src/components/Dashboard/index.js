import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { UPDATE_MESSAGES, UPDATE_NOTIFICATIONS, UPDATE_TRANSACTIONS, UPDATE_SETTINGS_INFO } from '../../redux/types';
import { SideNav, Messages } from '..';
import { messagesAPI, notificationsAPI, transactionsAPI, configurationAPI } from '../../api';

const MessagesComponent = (props) => <Messages {...props} />;
const DefaultComponent = () => <div>Base</div>;

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: UPDATE_MESSAGES, payload: messagesAPI });
        dispatch({ type: UPDATE_NOTIFICATIONS, payload: notificationsAPI });
        dispatch({ type: UPDATE_TRANSACTIONS, payload: transactionsAPI });
        dispatch({ type: UPDATE_SETTINGS_INFO, payload: configurationAPI });
    }, [dispatch]);
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-1 flex-row">
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
