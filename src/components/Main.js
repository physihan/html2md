import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="text-box markdown">
          <textarea spellCheck="false" >
          
          </textarea>
        </div>
        <div className="text-box preview" />
      </div>
    );
  }
}

export default Main;
