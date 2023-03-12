import React, { Component } from 'react';

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledNames: studentList
    };
  }

  randomize = () => {
    const shuffled = [...this.state.shuffledNames].sort(() => Math.random() - 0.5);
    this.setState({ shuffledNames: shuffled });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.shuffledNames.map((name) => (
            <li key={name}>{name}</li>
            ))}
        </ul>
            <button onClick={this.randomize}>Randomize Names</button>
      </div>
    );
  }
}
