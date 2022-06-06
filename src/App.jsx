import React from "react"
import ReactDOM from "react-dom";
import { App } from "./App" 

export const App = () => {
  const onClickButton = () => {
    alert();
  }

  return (
    <>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">こんばんは！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}; 

ReactDOM.render(<App />, document.getElementById("root")); 