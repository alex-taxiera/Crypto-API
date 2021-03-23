import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Header from "./Header/Header";
import Marketplace from "./Marketplace/Marketplace";
import Participants from "./Participants/Participants";
import Profile from "./profile/Profile";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Product from "./Product/Product";
import Event from "./Event/ProfileEvent";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Marketplace" component={Marketplace}/>
          <Route exact path="/Participants" component={Participants}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Product" component={Product}/>
          <Route exact path="/Event" component={Event}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;