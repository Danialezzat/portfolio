import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // deleteDoc, doc
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase-config'; //auth

const BlogPosts = ({isAuth, setIsAuth}) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getPosts();
  },[]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
  }


  return (
    <div>
            {postLists.map((post) => {
              return(
              <div key={post.id} className='text-black font-semi'>
                            <div className='post-header'>
                                <div className='title'>
                                    <h1>{post.title}</h1>
                                </div>
                                <div className='deltepost'>
                                    {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)} >&#128465;</button>}
                                </div>
                            </div>
                            <div className='postTextContainer'>{post.postText}</div>
                            <h3>@{post.author.name}</h3>
              </div>)
            })}
    </div>
  )
}

export default BlogPosts