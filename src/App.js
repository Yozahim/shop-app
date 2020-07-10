import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
