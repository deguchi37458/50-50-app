import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header"
import { Recents } from "./components/Recents"
import Ranking from "./components/Ranking"
import Create from "./components/Create"
import Info from "./components/Info"
import { Nav } from "./components/Nav"

import "./assets/css/reset.min.css";

export const App = () => {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Recents />} />
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
