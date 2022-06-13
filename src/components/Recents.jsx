import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

import db from  "../firebase";
import { doc, collection, onSnapshot, updateDoc, query, orderBy, increment} from "firebase/firestore"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const card = css`
  padding: 20px;
`;

const title = css`
  font-size: 20px;
  margin-bottom: 20px;
`;

const buttonGroup = css`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
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

  const vote1 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote1 : increment(1)
    });
  }
  const vote2 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote2 : increment(1)
    });
  }

  return (
    <>
        {posts.map((post) => {
          return (
            <Card>
              <div css={card}>
                <p css={title}>{post.question}</p>
                <ButtonGroup css={buttonGroup} disableElevation variant="contained">
                  <Button name="answer1" onClick={() => vote1(post.id)}>{post.answer1}</Button>
                  <Button name="answer2" onClick={() => vote2(post.id)}>{post.answer2}</Button>
                  {/* <p>{post.vote1}</p>
                  <p>{post.vote2}</p> */}
                </ButtonGroup>
                <Pie
                  data ={{
                    labels: [post.answer1, post.answer2],
                    datasets: [
                      {
                        // label: post.answer1,
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
                        circumferencw :0,
                      },
                    ],
                  }}
                />
              </div>
            </Card>
          )
        })}
    </>
  ); 
}