import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header"
import Recents from "./components/Recents"
import Ranking from "./components/Ranking"
import Create from "./components/Create"
import Info from "./components/Info"
import { Nav } from "./components/Nav"

import db from  "./firebase";
import {query, collection, onSnapshot, orderBy} from "firebase/firestore"

import "./assets/css/reset.min.css";
import "./assets/css/App.scss";

export const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = query(collection(db, "posts"), orderBy("question"));
    onSnapshot(postData, (querySnapshot) => {
      // console.log(querySnapshot.docs);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Recents posts={posts}/>} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/create" element={<Create />} />
            <Route path="/info" element={<Info />} />
          </Routes>
          <Nav />
        </BrowserRouter>
      </>
    );
  // }
}; 
