import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notification from './components/toast/Notification';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Test />
        </Route>
      </Switch>
      <Notification />
    </Router>
  );
}

export default App;
