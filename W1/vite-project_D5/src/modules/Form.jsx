import React, { Component } from "react";

export default class Form extends Component {
  state = {
    text: "",
    textarea: "",
    // checkbox: false,
    // singleSelect: '',
    // multiSelect: [],
  };

  submitForm = () => {};

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [name]: value,
    })
  }
  
  render() {
    const { text, textarea, checkbox, singleSelect, multiSelect } = this.state;

    return (
      <>
        {/* JSON.stringify(this.state) */}
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <form onSubmit={this.submitForm}>
          <label htmlFor=""> Text</label>
          <br />
          {/* remember to use onChange as well when using value props!  */}
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.changeHandler}
          />

          <br />

          <label>Text Area</label>
          <br />
          <textarea
            name="textarea"
            cols="30"
            rows="3"
            value={textarea}
            onChange={this.changeHandler}
          ></textarea>
        </form>
      </>
    );
  }
}
