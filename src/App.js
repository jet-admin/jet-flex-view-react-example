import React, { Component } from 'react';
import { getPublicApiService } from 'jet-admin-sdk';

import './App.css';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  getPublicApiService().projectsStore.setCurrent('YOUR_PROJECT_UNIQUE_NAME');
  getPublicApiService().authService.tokenLogin('YOUR_USER_TOKEN');
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: 'unknown' };
  }

  componentDidMount() {
    const self = this;
    getPublicApiService().currentUserStore.get().subscribe(result => {
      self.setState({ user: result ? result.username : 'unknown' });
    });
  }

  render() {
    return (
    <p className="custom-view-element">
      jet-test-react works!<br/>
      current user: {this.state.user}
    </p>
    );
  }
}

export default App;
