import React from "react";
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Register from "./Register"

import 'swiper/css';

import "../assets/css/Recents.scss"

export default class Recents extends React.Component {
  render() {
    const onClickButton = (e) => {
        console.log(this.state.question)
    }
    const addQuestion = () => {
      // 追加
      this.state.question.push({
        title: this.refs.newTitle.value,
        option1: this.refs.newOption1.value,
        option2: this.refs.newOption2.value
      });
      // 保存
      this.setState({
        question : this.state.question
      });
      // 初期化
      this.refs.newTitle.value='';
      this.refs.newOption1.value='';
      this.refs.newOption2.value='';
    }
    return (
      <>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {this.props.question.map((question, i) => {
            return (
              <SwiperSlide>
                <Card>
                  <div className="card">
                    <p className="title">{question.title}</p>
                    <ButtonGroup className="button-group" disableElevation variant="contained">
                      <Button name="option1" onClick={onClickButton}>{question.option1}</Button>
                      <Button name="option2" onClick={onClickButton}>{question.option2}</Button>
                    </ButtonGroup>
                  </div>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <p>Register</p>
        <input type="text" ref="newTitle"/>
        <input type="text" ref="newOption1"/>
        <input type="text" ref="newOption2"/>
        <input type="button" value="追加" onClick={addQuestion} />
      </>
    );
  }
}