import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Content from './Components/Content';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
      <PrivateRoute exact path="/plants" component={ Main }/>
      <Route path="/" component={ Content }/>
      <Footer />
      </Switch>
    </div>
  );
}

export default App;
