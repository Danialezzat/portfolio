import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // deleteDoc, doc
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config"; //auth

const BlogPosts = ({ isAuth, setIsAuth, isDarkMode }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    console.log("repeated");
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center ">
      {postLists.map((post) => {
        return (
          <div
            className="shadow-lg border rounded-md mt-10 w-[400px] sm:w-full "
            key={post.id}
          >
            <div className="post-header">
              <div
                className={`${
                  isDarkMode ? "bg-[#9896f1]" : "bg-[#0a192f]"
                }  w-full h-[80px] flex justify-between items-center px-4 rounded-t-md   z-10 font-semibold md:w-full`}
              >
                <h1 className="font-semibold">{post.title}</h1>
                <h1>{post.createdAt.toDate().toDateString()}</h1>
                <div className="bg-[#9896f1] p-2">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className="bg-[#9896f1]"
                      onClick={() => deletePost(post.id)}
                    >
                      &#10005;
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#ccd6f6] p-2 font-semibold ">
              {post.postText}
            </div>
            <h3 className="bg-[#ccd6f6] p-2">@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
