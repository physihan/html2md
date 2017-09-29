import React, { Component } from 'react';

class Header extends Component {
  importMD() {
    alert('ss');
  }
  render() {
    return (
      <header className="header">
        header
        <button onClick={this.importMD}>导入</button>
      </header>
    );
  }
}
// <img src="./physihan.svg" style={{width:'auto',height:'100px'}}/>

export default Header;
