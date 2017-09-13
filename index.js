import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './src/Example';
import MarkDown from './src/containers/MarkDown';

class APP extends Component {
  render() {
    return (
      <div>
        <MarkDown />
      </div>
    );
  }
}

// export default APP;
ReactDOM.render(<APP />, document.getElementById('app'));
