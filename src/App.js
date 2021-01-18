import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home" 
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import Footer from "./Footer";
import Nav from "./Nav";
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51I251DLABLX75xucA79vBpX5LjCpZlyGaUznUacI8fMaHqc22rkYbNEYcSFrN2jhLlx8BbR8B6sWvS1BCWOiAhpt00uZR8tuq2')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
     // console.log("THE USER IS >>> ", authUser);
      if (authUser){
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })

    return() =>{
      //any cleanup operations go in here
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Nav />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Nav />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Nav />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/*This is the default route */}
          <Route path="/">
            <Header />
            <Nav />
            <Home />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
