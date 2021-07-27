import './App.css';
import { Dashboard } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const DashboardComponent = () => <Provider store={store}><Dashboard /></Provider>;

const App = () => {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/" component={DashboardComponent} />
      </Switch>
    </Router>
  );
}

export default App;
