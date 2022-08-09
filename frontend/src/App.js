import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {StoreProvider} from './store/Store'
import {Navbar} from './Components/Navbar'
import {PrivateRoute} from './Components/PrivateRoute'
import {Profile} from './Components/Profile'
import {Home} from './Components/Home'
import {Login} from './Pages/Login'
import {Signup} from './Pages/Signup'


function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <PrivateRoute path="/" component={Home}/>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
