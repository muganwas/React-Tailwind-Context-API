import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyContext } from '../../context';
import { SideNav, Messages } from '..';

const MessagesComponent = (props) => <MyContext.Consumer>{context => (<Messages {...props} {...context} />)}
</MyContext.Consumer>;
const DefaultComponent = () => <MyContext.Consumer>
    {context => (<div>{context.dashTitle}</div>)}
</MyContext.Consumer>;
const SideNavComponent = () => <MyContext.Consumer>{context => <SideNav {...context} />}</MyContext.Consumer>

const Dashboard = () => {
    const [height, updateHeight] = useState(window.innerHeight);
    const onResize = e => updateHeight(e.target.innerHeight);
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return function cleanup() {
            window.removeEventListener('resize', onResize);
        }
    });

    return (
        <>
            <div style={{ height: height - 65 }} className="w-full overflow-hidden h-full flex flex-col">
                <div className="flex flex-1 flex-row h-full">
                    <SideNavComponent />
                    <div className='flex flex-row flex-grow'>
                        <Switch>
                            <Route exact path='/dashboard/' component={DefaultComponent} />
                            <Route exact path='/dashboard/messages' component={MessagesComponent} />
                        </Switch>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Dashboard;
