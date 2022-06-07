import React from "react";

// import Register from "./Register"

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
    const addQuestion = () => {
      // 追加
      this.state.question.push({
        title: this.refs.newTitle.value,
        option1: this.refs.newOptions1.value,
        option2: this.refs.newOptions2.value
      });
      // 保存
      this.setState({
        question : this.state.question
      });
      // 初期化
      this.refs.newTitle.value='';
      this.refs.newOptions1.value='';
      this.refs.newOptions2.value='';
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
        <p>Register</p>
        <input type="text" ref="newTitle"/>
        <input type="text" ref="newOptions1"/>
        <input type="text" ref="newOptions2"/>
        <input type="button" value="追加" onClick={addQuestion} />
      </>
    );
  }
}