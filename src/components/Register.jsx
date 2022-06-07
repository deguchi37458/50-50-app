import React from "react";
import ReactDOM from "react-dom";

export default class List extends React.Component {
  addQuestion() {
    console.log("add")
  }
  render() {
    return (
      <>
        <p>Register</p>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="button" value="追加" onClick={this.addQuestion} />
      </>
    );
  }
}