import React, { useEffect, useState } from "react";

import { Questions } from "./Questions";

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

  const percentGen = async (id) => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().question);
    } else {
      console.log("No such document!");
    }
  }

  const vote1 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote1 : increment(1)
    });
    percentGen(id);
  }
  const vote2 = async (id) => {
    updateDoc(doc(db, "posts", id), {
      vote2 : increment(1)
    });
    percentGen(id);
  }

  return (
    <>
      <h1 class="pageTitle">Recents</h1>
      <Questions posts={posts} vote1={vote1} vote2={vote2} />
    </>
  ); 
}