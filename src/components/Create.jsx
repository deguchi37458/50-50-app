import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import db from  "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default class Create extends React.Component {
  addPost = () =>{
    console.log(this.refs.question.value);
    addDoc(collection(db, "posts"), {
      question: this.refs.question.value,
      answer1: this.refs.answer1.value,
      answer2: this.refs.answer2.value
    });
  }
  render() {
    return (
      <>
        <h1>Create</h1>
        {/* <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        > */}
          <form>
            <input type="text" ref="question" />
            <input type="text" ref="answer1" />
            <input type="text" ref="answer2" />
            <input type="button" value="追加" onClick={this.addPost} />
          </form>
        {/* </Box> */}
      </>
    );
  }
}