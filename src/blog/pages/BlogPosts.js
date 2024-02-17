import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
  query,
  orderBy,
} from "firebase/firestore"; // deleteDoc, doc
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";

const BlogPosts = ({ isAuth, setIsAuth, isDarkMode }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(query(postsCollectionRef, orderBy("createdAt", "desc")));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  const likePost = async (id) => {
    const postDocRef = doc(db, "post", id);
    await updateDoc(postDocRef, {
      liked: arrayUnion(auth.currentUser.uid),
      likes: increment(1),
    });
    getPosts();
    console.log(auth.currentUser.uid);
  };

  const unlikePost = async (id) => {
    const postDocRef = doc(db, "post", id);
    console.log(auth.currentUser.uid + "0000001");

    await updateDoc(postDocRef, {
      liked: arrayRemove(auth.currentUser.uid),
      likes: increment(-1),
    });
    console.log(auth.currentUser.uid + "0000000");
    getPosts();
  };

  useEffect(() => {
    getPosts();
    console.log("repeated");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${
        !isDarkMode ? "bg-[#102749]" : "bg-[#dedede] "
      } h-full w-full flex flex-col justify-start items-center  p-10 `}
    >
      {postLists.map((post) => {
        return (
          <div
            className={`bg-white text-black h-[500px] shadow-2xl border rounded-xl mt-[100px] w-[95%]  flex flex-col justify-start items-center relative p-1 `}
            key={post.id}
          >
            <img
              src={post.imageUrl}
              alt=""
              className="h-[300px] w-[100%] object-cover  "
            />
            <h1 className="text-2xl text-left bg-white bg-opacity-80 w-full h-[50px] font-bold p-2 absolute top-[254px]">
              {post.title}
            </h1>
            <div className=" h-[180px] overflow-y-auto">
              <p className="font-semibold  p-2 text-justify w-full">
                {post.postText}
              </p>
            </div>
            <div className="">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  className="absolute top-0 right-0 p-2 bg-white bg-opacity-55 rounded-bl-md rounded-tr-md text-red-600 font-semibold"
                  onClick={() => deletePost(post.id)}
                >
                  &#10005;
                </button>
              )}
            </div>

            <div className=" flex absolute top-0 left-0 p-2 bg-white bg-opacity-55 rounded-br-md rounded-tl-md">
              <h3 className=" font-semibold">@{post.author.name}</h3> .
              <h6>({post.createdAt.toDate().toDateString()})</h6>
            </div>
            <div
              onClick={() => {
                if (post.liked.indexOf(auth.currentUser.uid) !== -1) {
                  unlikePost(post.id);
                } else {
                  likePost(post.id);
                }
              }}
              className="absolute left-2 bottom-8 text-xl cursor-pointer p-1"
            >
              {isAuth &&
                (post.liked.indexOf(auth.currentUser.uid) !== -1 ? (
                  <FcLike />
                ) : (
                  <FaRegHeart />
                ))}
            </div>
            <p className="font-bold absolute left-2 bottom-2 text-xl cursor-pointer p-1">
              {post.likes} Likes
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
