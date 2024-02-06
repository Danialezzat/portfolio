import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth, isDarkMode}) => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")


  const postsCollectionRef = collection(db, "post")

  const createPost = async () => {
    await addDoc(postsCollectionRef, {title: title,postText: postText, author: {name: auth.currentUser.displayName , id: auth.currentUser.uid}});
    navigate('/bloghome')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/bloghome/bloglogin')
    }
  },[])



  return (
    <div className={`${isDarkMode ? 'bg-[#eaf6f6] text-black' : 'bg-[#0a192f]' } w-full h-screen`}>
      <div>
        <h1>Create a Post</h1>
        <div className='inputGroup'>
          <label htmlFor="title">Title</label>
          <input id='title' type="text" placeholder='Title...' onChange={(event) => {setTitle(event.target.value)}} />
        </div>
        <div className='inputGroup'>
        <label htmlFor="post">post</label>
        <textarea name="" id="post" placeholder='Write here...' onChange={(event) => {setPostText(event.target.value)}} ></textarea>
        </div>
        <button onClick={createPost}>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost