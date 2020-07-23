import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import CheckoutPage from './pages/checkout/checkout'

import Header from './components/header/header'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { selectCollectionsForPreview } from './redux/shop/shop.selector'

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        }
      else {
        setCurrentUser(userAuth)
        addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return(
    <div className="App">
    <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>
        <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage/>)}></Route>
      </Switch>
    </div>
    )
  }
}

//access do props.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

//Dispatch usera potrzebny do rozprowadzenia usera np do headera
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
