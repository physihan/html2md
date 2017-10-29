import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    // this.status='on'
  }


  componentDidMount() {
    document.body.appendChild(this.container);  
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  render() {
    return ReactDOM.createPortal(<div className="modal">{this.props.children}</div> , this.container);
  }
}
export default Modal