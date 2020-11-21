import './App.css';
import React from 'react';
import Cards from './Components/MainComponents/Cards';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Content from './Components/Content/';
import Signup from './Components-J/Sign-up';
import AddPlant from './Components/AddPlant';

function App() {
  
  return (
    <div className="App">
      <Header />
        <Switch>
          <PrivateRoute exact path="/plants" component={ Cards }/>
          <Route path="/addplant" component={ AddPlant } />
          <Route path="/signup" component={ Signup } />
          <Route path="" component={ Content } />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
