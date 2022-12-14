import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './functions';


class App extends Component {
  
render() {

        return (
   
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} > + </button>
        <span className={styles.value}>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}> - </button>
      </div>
     
  )
}
};

export default App;
