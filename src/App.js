import './App.css';
import { Dashboard } from './components';
import { Provider } from 'react-redux';
import { Header } from '../src/components';
import store from './redux/store';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

const DashboardComponent = () => <Provider store={store}><Dashboard /></Provider>;
const HeaderComponent = () => <Provider store={store}><Header /></Provider>;

const App = () => {
  return (
    <div className="w-full flex-col">
      <HeaderComponent />
      <div>
        <Router basename='/'>
          <Switch>
            <Route path="/dashboard" component={DashboardComponent} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
