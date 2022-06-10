import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import db from  "../firebase";
import {collection,getDocs} from "firebase/firestore"

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
    const postRef = collection(db, "posts");
    // 複数のドキュメントが入っているのでgetDocs、getDocsによりQueryを使用することができる。
    getDocs(postRef).then((querySnapshot) => {
      //querySnapshot.docsの中身を展開。
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