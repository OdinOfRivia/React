import React, { Component } from 'react';
import left from "../assets/look-left.jpeg";
import right from "../assets/look-right.jpeg";

//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {lookingWay: left};

  //click left/right button handler goes here

   wayHandler = (way) => {
    this.setState({lookingWay: way});
   }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.lookingWay}
            
          />
        </div>
        <button onClick={() => this.wayHandler(left)} className="btn">⭠</button>
        <button onClick={() => this.wayHandler(right)} className="btn">⭢</button>
      </>
    );
  }
}

export default ChallengeOne;