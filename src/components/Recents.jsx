import React, { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";

import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';

import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import db from  "../firebase";
import { doc, getDoc, collection, onSnapshot, updateDoc, query, orderBy, increment} from "firebase/firestore"

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

const voteButton1 = css`
  color: #000; 
  border: none;
  background-color: rgba(255, 99, 132, 0.2);
`;

const voteButton2 = css`
  color: #000;
  border: none;
  background-color: rgba(54, 162, 235, 0.2);
`;

// const radioGroup = css`
//   width: 100%;
//   display: flex;
//   gap: 10px;
//   justify-content: center;
// `;

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

export const Recents = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // コレクションの参照
    const postRef = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    // onSnapshotでリアルタイムにデータを取得
    const unsub = onSnapshot(postRef,(querySnapshot) => {
      //querySnapshot.docsの中身を展開。ドキュメントIDをidとする。
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  // const [cookies, setCookie, removeCookie] = useCookies(['vote'])

  // const vote = (id, answer) => {
  //   setCookie(id, answer);
  //   console.log(cookies.id);
  // }

  const percentGen = async (id) => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().question);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const vote1 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote1 : increment(1)
    });
    percentGen(id);
  }
  const vote2 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote2 : increment(1)
    });
    percentGen(id);
  }

  return (
    <>
      <h1 class="pageTitle">Recents</h1>
        {posts.map((post) => {
          return (
            <Card css={card}>
              <div css={container}>
                <p css={title}><span>Q.</span>{post.question}</p>
                <ButtonGroup css={buttonGroup} disableElevation variant="contained">
                  <Button css={voteButton1} name="answer1" onClick={() => vote1(post.id)}>{post.answer1}</Button>
                  <Button css={voteButton2} name="answer2" onClick={() => vote2(post.id)}>{post.answer2}</Button>
                </ButtonGroup>
                {/* <RadioGroup css={radioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value={post.vote1} control={<Radio />} label={post.answer1} onChange={() => vote(post.id, post.answer1)} />
                  <FormControlLabel value={post.vote2} control={<Radio />} label={post.answer2} onChange={() => vote(post.id, post.answer2)} />
                </RadioGroup> */}
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