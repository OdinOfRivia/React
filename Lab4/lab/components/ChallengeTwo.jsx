import React, { Component } from "react";

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
  state = {
    shuffledNames: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shuffledNames: studentList });
    }, 3000);
  }

  randomize = () => {
    //Fisher-Yates shuffle algorithm
    const shuffled = [...this.state.shuffledNames].sort(() => Math.random() - 0.5);
    this.setState({ shuffledNames: shuffled });
  };

  render() {
    return (
      <>
        <h2>Challange 2</h2>
        <div className="msg">
          <ul>
            {this.state.shuffledNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <button onClick={this.randomize} className="btn large">
          Randomize Names
        </button>
      </>
    );
  }
}
