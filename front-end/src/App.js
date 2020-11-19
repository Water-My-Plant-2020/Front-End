import './App.css';
import React from 'react';
import Card from './Components/MainComponents/Card';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Content from './Components/Content';

function App() {
  
  return (
    <div className="App">
      <Header />
        <Switch>
          <PrivateRoute exact path="/plants" component={ Card }/>
          <Route path="" component={ Content } />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
