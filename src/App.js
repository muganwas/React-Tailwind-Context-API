import './App.css';
import { Dashboard } from './components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const DashboardComponent = () => <Dashboard />;

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
