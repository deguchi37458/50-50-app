import React, { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";

import { Questions } from "./Questions"

import db from  "../firebase";
import { doc, getDoc, collection, onSnapshot, updateDoc, query, orderBy, increment} from "firebase/firestore"

export const Recents = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // コレクションの参照
    const postRef = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    // onSnapshotでリアルタイムにデータを取得
    const unsub = onSnapshot(postRef,(querySnapshot) => {
      //querySnapshot.docsの中身を展開。ドキュメントIDをidとする。
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  // const [cookies, setCookie, removeCookie] = useCookies(['vote'])

  // const vote = (id, answer) => {
  //   setCookie(id, answer);
  //   console.log(cookies.id);
  // }

  return (
    <>
      <h1 class="pageTitle">Recents</h1>
      <Questions posts={posts}/>
    </>
  ); 
}