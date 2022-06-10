import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import db from  "../firebase";
import {query, collection, onSnapshot, orderBy} from "firebase/firestore"

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
    const postData = query(collection(db, "posts"), orderBy("question"));
    onSnapshot(postData, (querySnapshot) => {
      console.log(querySnapshot.docs);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const onClickButton = (e) => {
    console.log(e.target.name);
    if(e.target.name === "answer1"){
      console.log("1");
    }else{
      console.log("2");
    }
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
        {posts.map((post, i) => {
          return (
            // <SwiperSlide>
              <Card>
                <div css={card}>
                  <p css={title}>{post.question}</p>
                  <ButtonGroup css={buttonGroup} disableElevation variant="contained">
                    <Button name="answer1" onClick={onClickButton}>{post.answer1}</Button>
                    <Button name="answer2" onClick={onClickButton}>{post.answer2}</Button>
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