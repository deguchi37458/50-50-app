import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import db from  "../firebase";
import { doc, collection, onSnapshot, updateDoc, query, orderBy, increment} from "firebase/firestore"

// import 'swiper/css';

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
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      > */}
        {posts.map((post) => {
          return (
            // <SwiperSlide>
              <Card>
                <div css={card}>
                  <p css={title}>{post.question}</p>
                  <ButtonGroup css={buttonGroup} disableElevation variant="contained">
                    <Button name="answer1" onClick={() => vote1(post.id)}>{post.answer1}</Button>
                    <Button name="answer2" onClick={() => vote2(post.id)}>{post.answer2}</Button>
                    <p>{post.vote1}</p>
                    <p>{post.vote2}</p>
                  </ButtonGroup>
                </div>
              </Card>
            // </SwiperSlide>
          )
        })}
      {/* </Swiper> */}
    </>
  ); 
}