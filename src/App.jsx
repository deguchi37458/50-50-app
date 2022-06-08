import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header"
import Recents from "./components/Recents"
import Ranking from "./components/Ranking"
import Create from "./components/Create"
import Info from "./components/Info"
import { Nav } from "./components/Nav"

import db from  "./firebase";
import {collection, getDocs} from "firebase/firestore"

import "./assets/css/reset.min.css";
import "./assets/css/App.scss";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: [
        {id: 1, title: "title1", option1: "yes", option2: "no"},
        {id: 2, title: "title2", option1: "left", option2: "right"}
      ]
    }
  }
  addQuestion = (e) => {
    console.log(e);
    // // 追加
    // this.state.question.push({
    //   title: this.refs.newTitle.value,
    //   option1: this.refs.newOption1.value,
    //   option2: this.refs.newOption2.value
    // });
    // // 保存
    // this.setState({
    //   question : this.state.question
    // });
    // // 初期化
    // this.refs.newTitle.value='';
    // this.refs.newOption1.value='';
    // this.refs.newOption2.value='';
  }
  render(){
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Recents question={this.state.question}/>} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/create" element={<Create addQuestion={() => {this.addQuestion();}}/>} />
            <Route path="/info" element={<Info />} />
          </Routes>
          <Nav />
        </BrowserRouter>
      </>
    );
  }
}; 