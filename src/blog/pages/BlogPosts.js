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
    <div className={`${!isDarkMode ? 'bg-[#102749]' : 'bg-[#dedede] '} h-full w-full flex flex-col justify-start items-center  p-10 `}>
      {postLists.map((post) => {
        return (
          <div
            className={`bg-white text-black h-[500px] shadow-2xl border rounded-xl mt-[100px] w-[95%]  flex flex-col justify-start items-center relative p-1 `}
            key={post.id}
          >
            
              
                <img src={post.imageUrl} alt="" className="h-[300px] w-[100%] object-cover  "/>
                <h1 className="text-2xl text-left bg-white bg-opacity-80 w-full h-[50px] font-bold p-2 absolute top-[254px]">{post.title}</h1>
                <div className=" h-[180px] overflow-y-auto">
                  <p className="font-semibold  p-2 text-justify w-full">
                    {post.postText}
                  </p>
                </div>
                <div className=''>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className='absolute top-0 right-0 p-2 bg-white bg-opacity-55 rounded-bl-md rounded-tr-md text-red-600 font-semibold'
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
              

          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
