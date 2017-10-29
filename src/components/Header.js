import React, { Component } from 'react';
import ImportHTML from './ImportHTML'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false
    };
  }
  importMD() {
    // alert('ss');
    this.setState({
      openModal: true
    });
  }
  closeMD() {
    this.setState({
      openModal: false
    });
  }
  render() {
    return (
      <header className="header">
        header
        <button onClick={this.importMD.bind(this)}>导入</button>
        {this.state.openModal ? <ImportHTML/> : ''}
      </header>
    );
  }
}
// <img src="./physihan.svg" style={{width:'auto',height:'100px'}}/>

export default Header;
