import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

import { Header } from "./components/Header"
import { Recents } from "./components/Recents"
import Ranking from "./components/Ranking"
import Create from "./components/Create"
import Info from "./components/Info"
import { Nav } from "./components/Nav"

import "./assets/css/reset.min.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapper = css`
  padding: 20px;
`;

export const App = () => {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div css={wrapper}>
          <CookiesProvider>
            <Routes>
              <Route exact path="/" element={<Recents />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/create" element={<Create />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </CookiesProvider>
          </div>
          <Nav />
        </BrowserRouter>
      </>
    );
  // }
}; 
