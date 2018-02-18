import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import marked from 'marked'
class Main extends Component {
  constructor(){
    super()
    this.state={
      content:''
    }
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput(e){
    console.log(e.target.value);
    this.setState({
      content:e.target.value
    })
    // ReactDOM.render(<a href="">{e.target.value}</a>,document.getElementsByClassName('preview')[0])
    document.getElementsByClassName('preview')[0].innerHTML=marked(e.target.value)
    
  }
  render() {
    return (
      <div className="main">
        <div className="text-box markdown">
          <textarea spellCheck="false" onChange={this.handleInput} >
          
          </textarea>
        </div>
        <div className="text-box preview">
        213d
        </div>
      </div>
    );
  }
}

export default Main;
