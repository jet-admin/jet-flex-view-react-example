import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class JetTestReact extends HTMLElement {
  static get observedAttributes() {
    return ['foo'];
  }

  createElement(foo) {
    return React.createElement(App, { foo: foo, dispatchEvent: this.dispatchEvent.bind(this) }, React.createElement('slot'));
  }

  connectedCallback() {
    const foo = this.getAttribute('foo');
    ReactDOM.render(this.createElement(foo), this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'foo') {
      ReactDOM.render(this.createElement(newValue), this);
    }
  }
}

customElements.define('jet-test-react', JetTestReact);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
