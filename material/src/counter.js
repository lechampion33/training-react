import React, { Component } from 'react';
import './App.css'
class Counter extends Component{
    state={
      count:0,
    };
    handleIncrement =()=>{
      this.setState({count:this.state.count+1})
    };
    handleDecrement =()=>{
      this.setState({count:this.state.count-1})
    }
    check=()=>{
      if(this.state.count ===5){
        throw new Error('Crashed')
      }
    }
    render(){
      return(
        <div className='App-header'>
          <this.check />
          <button onClick={this.handleIncrement}>Incre</button><br/>
          <span>{this.state.count}</span><br/>
          <button onClick={this.handleDecrement}>decre</button>
        </div>
      );
    }
  }
  export default Counter;