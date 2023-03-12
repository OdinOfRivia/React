import React, { Component } from 'react';

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

export default class ChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledNames: names
    };
  }

  randomize = () => {
    const shuffled = [...this.state.shuffledNames].sort(() => Math.random() - 0.5);
    this.setState({ shuffledNames: shuffled });
  };

  render() {
    return (
      <div>
        <button onClick={this.randomize}>Randomize Names</button>
        <ul>
          {this.state.shuffledNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
