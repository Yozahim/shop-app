import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import Header from './components/header/header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return(
    <div className="App">
    <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUpPage}></Route>
      </Switch>
    </div>
    )
  }
}

export default App;
