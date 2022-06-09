import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import db from  "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default class Create extends React.Component {
  addPost = () =>{
    console.log("add");
    addDoc(collection(db, "posts"), {
      question: "Los Angeles",
      answer1: "CA",
      answer2: "USA"
    });
  }
  render() {
    return (
      <>
        <h1>Create</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Question" variant="standard" />
          <TextField id="standard-basic" label="Answer1" variant="standard" />
          <TextField id="standard-basic" label="Answer2" variant="standard" />
        </Box>
        <Button onClick={()=>{this.addPost();}}>追加</Button>
      </>
    );
  }
}