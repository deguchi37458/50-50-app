import React from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const card = css`
  margin-bottom: 20px;
`;

const container = css`
  padding: 20px;
`;

const title = css`
  font-size: 20px;
  padding-left: 30px;
  margin-bottom: 20px;
  position: relative;
  span {
    position: absolute;
    top: -2px;
    left: 0;
    font-size: 24px;
  }
`;

const buttonGroup = css`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const chartWrap = css`
  position: relative;
`;

const voteTotal = css`
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    font-size: 20px;
  }
`;

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 99, 132, 0.2)",
    },
    secondary: {
      main: "rgba(54, 162, 235, 0.2)",
    },
  },
});

export const Questions = (props) => {
  return (
    <>
      {props.posts.map((post) => {
        return (
          <Card css={card}>
            <div css={container}>
              <p css={title}><span>Q.</span>{post.question}</p>
              <ButtonGroup css={buttonGroup} disableElevation variant="contained">
                <ThemeProvider theme={buttonTheme}>
                  <Button color="primary" name="answer1" onClick={() => props.vote1(post.id)}>{post.answer1}</Button>
                  <Button color="secondary" name="answer2" onClick={() => props.vote2(post.id)}>{post.answer2}</Button>
                  </ThemeProvider>
              </ButtonGroup>
              <div css={chartWrap}>
                <Doughnut
                  data ={{
                    datasets: [
                      {
                        data: [post.vote1, post.vote2],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1,
                        rotation: 180,
                        circumference :360,
                      },
                    ],
                  }}
                />
                <div css={voteTotal}>
                  {post.vote1 + post.vote2}
                  <span> votes</span>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </>
  ); 
}