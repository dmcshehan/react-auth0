import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import Auth from './Auth/Auth';
import Callback from './Callback';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => {
                return <Home auth={this.auth} {...props} />;
              }}
            />
            <Route
              path="/callback"
              exact
              render={(props) => {
                return <Callback auth={this.auth} {...props} />;
              }}
            />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
