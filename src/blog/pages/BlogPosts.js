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
  const [showMore, setShowMore] = useState(false);
  const postsCollectionRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(
      query(postsCollectionRef, orderBy("createdAt", "desc"))
    );
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
            className={`bg-white text-black  shadow-2xl border rounded-xl mt-[100px] w-[95%]  flex flex-col justify-start items-left relative  `}
            key={post.id}
          >
            <img
              src={post.imageUrl}
              alt=""
              className="h-[300px] w-[100%] object-cover rounded-t-lg "
            />
            <div
              onClick={() => {
                if (post.liked.indexOf(auth.currentUser.uid) !== -1) {
                  unlikePost(post.id);
                } else {
                  likePost(post.id);
                }
              }}
              className="text-3xl py-3 px-2 border-b"
            >
              {isAuth &&
                (post.liked.indexOf(auth.currentUser.uid) !== -1 ? (
                  <FcLike />
                ) : (
                  <FaRegHeart />
                ))}
            </div>
            <p className="p-2 text-black">
            &#10084; {post.likes} Likes
            </p>
            <h1 className="text-2xl text-left bg-white bg-opacity-80 w-full  font-bold  p-2">
              {post.author.name}: <span className="text-xl">{post.title}</span>
            </h1>
            <p className="font-semibold p-2   text-justify w-full py-4">
              {showMore ? post.postText : `${post.postText.substring(0, 25)}`}
              <span className="text-[#9896f1] cursor-pointer" onClick={() => setShowMore(!showMore)}>
                {!showMore ? " more..." : " less"}
              </span>
              {/* {post.postText} */}
            </p>
            <div className=" flex text-sm p-2 bg-white bg-opacity-55 rounded-br-md rounded-tl-md">
              <h6>{post.createdAt.toDate().toDateString()}</h6>
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
            
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
