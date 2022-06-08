import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class Create extends React.Component {
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
        <Button onClick={()=>{this.props.addQuestion();}}>追加</Button>
        {/* <input type="text" ref="newTitle"/>
        <input type="text" ref="newOption1"/>
        <input type="text" ref="newOption2"/>
        <input type="button" value="追加" onClick={()=>{this.props.addQuestion();}} /> */}
      </>
    );
  }
}