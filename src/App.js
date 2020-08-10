import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import ItemPreview from './pages/item-preview/item-preview'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import CheckoutPage from './pages/checkout/checkout'

import { GlobalStyle } from './global.style'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
// import { selectCurrentLocale } from './redux/i18n/i18n.selector'
import ContactPage from './pages/contact/contact';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    // checking which locale is set, then changing the page managment left - right/right - left
    // document.dir = this.props.locale === "ar" ? "rtl" : "ltr";
    const { setCurrentUser } = this.props
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
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return(
    <div className="App">
    <GlobalStyle/>
      <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/itempreview' component={ItemPreview}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage/>)}></Route>
          <Route path='/contact' component={ContactPage}></Route>
        </Switch>
      <Footer></Footer>
    </div>
    )
  }
}

//access do props.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // locale: selectCurrentLocale
})

//Dispatch usera potrzebny do rozprowadzenia usera np do headera
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
