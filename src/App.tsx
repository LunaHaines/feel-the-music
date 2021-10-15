import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showToast } from './state-slices/toast/toast-slice';
import Header from './components/toast/Header';

function App() {
  const dispatch = useDispatch();

  let payload = {
    body: 'it works!',
    header: Header,
  }

  let handleClick = () => {
    dispatch(showToast(payload));
  }

  return (
    <Router>
      <Switch>
        
      </Switch>
      <Button onClick={() => handleClick()}>Show Notification</Button>
    </Router>
  );
}

export default App;
