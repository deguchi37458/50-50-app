import React from "react";

import Register from "./Register"

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: [
        {title: "title1", option1: "yes", option2: "no"}
      ]
    }
  }
  render() {
    const onClickButton = () => {
      console.log("ok");
    }
    return (
      <>
        <ul>
          {this.state.question.map((question, i) => {
            return (
              <li>
                <p>{question.title}</p>
                <input type="button" value={question.option1} onClick={onClickButton} />
                <input type="button" value={question.option2} onClick={onClickButton} />
              </li>
            )
          })}
        </ul>
        <Register />
      </>
    );
  }
}