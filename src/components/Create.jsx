import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import db from  "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.question = React.createRef();
    this.answer1 = React.createRef();
    this.answer2 = React.createRef();
  }
  addPost = () =>{
    console.log(this.question.current.value);
    addDoc(collection(db, "posts"), {
      question: this.question.current.value,
      answer1: this.answer1.current.value,
      answer2: this.answer2.current.value,
      vote1: 0,
      vote2: 0,
      timestamp: serverTimestamp()
    });
  }
  render() {
    return (
      <>
        <h1>Create</h1>
        <form>
          <TextField id="outlined-basic" label="Question" variant="outlined" inputRef={this.question} />
          <TextField id="outlined-basic" label="Answer1" variant="outlined" inputRef={this.answer1} />
          <TextField id="outlined-basic" label="Answer2" variant="outlined" inputRef={this.answer2} />
          <Button variant="contained" onClick={this.addPost}>追加</Button>
        </form>
      </>
    );
  }
}