import { createStore } from 'redux';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { number } from 'prop-types';

const initialState = {
  codesets: [9, 7]
}

  class App extends React.Component<any> {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }

    constructor(props: any) {
      super(props);

      axios
        .get('https://codesets.azurewebsites.net/codesets/getcodesets')
        .then(function (response) {
          
        });
    }
  }
  
  ReactDOM.render(
    <App name={initialState.codesets[0]} />,
    document.getElementById('app')
  );

