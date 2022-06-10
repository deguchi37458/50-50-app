import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const title = css`
  font-size: 28px;
  padding: 10px; 
  letter-spacing: 1px;
`;

export default class Info extends React.Component {
  render() {
    return (
      <>
        <h1 css={title}>50/50</h1>
        <p>「ちょうど50/50に分かれる質問ってなんだろう？」という開発者の素朴な疑問から生まれたWebアプリケーション</p>
      </>
    );
  }
}