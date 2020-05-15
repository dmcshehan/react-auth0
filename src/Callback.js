import React, { Component } from 'react';

export default class Callback extends Component {
  componentDidMount() {
    //handle authentication if the expected values are in the url

    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw Error('Invalid callback URL');
    }
  }
  render() {
    return <h1>Loading...</h1>;
  }
}
