import React from 'react';
import './App.css';
import { Dashboard } from './components';
import { Header } from '../src/components';
import { MyContext, MyProvider } from './context';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

const HeaderComponent = (props) => <MyContext.Consumer>{context => <Header {...props} {...context} />}</MyContext.Consumer>;

const AppComponent = () => (
    <div className="w-full h-full flex-col" data-testid='app-container'>
      <HeaderComponent />
      <div className='flex h-full flex-1'>
        <Router basename='/'>
          <Switch>
          <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Router>
      </div>
    </div>
)

const App = (props) => (<MyProvider>
  <AppComponent {...props} />
</MyProvider>);

export default App;
