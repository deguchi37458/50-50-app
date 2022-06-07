import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header"
import Home from "./components/Home"
import List from "./components/List"

import "./assets/css/reset.min.css";
import "./assets/css/App.scss";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}; 
