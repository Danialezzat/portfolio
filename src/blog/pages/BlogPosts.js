import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';

const BlogPosts = () => {
    const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getPosts();
  })


  return (
    <div>
            {postLists.map((post) => {
              return <div className='text-black font-semi'>{post.title}</div>
            })}
    </div>
  )
}

export default BlogPosts