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
    console.log('CreatePosts');
  },[isAuth,navigate])

  
  return (
    <div className='h-screen w-full flex flex-col justify-cneter items-center '>
      <div className='h-screen w-full flex flex-col justify-center items-center '>
        <h1 className={`${isDarkMode ? 'bg-[#9896f1]' : 'bg-[#0a192f] border' }  w-[50%] h-[80px] flex justify-center items-center px-4 rounded-t-md   z-10 font-semibold`}>Create a Post</h1>
        <div className='bg-[#ccd6f6] p-2 w-[50%]'>
          <input className='bg-[#ccd6f6] text-black w-full outline-none' id='title' type="text" placeholder='Title...' onChange={(event) => {setTitle(event.target.value)}} />
        </div>
        <div className='bg-[#ccd6f6] p-2 w-[50%]'>
          <textarea className='bg-[#ccd6f6] text-black w-full  outline-none' name="" id="post" placeholder='Write here...' onChange={(event) => {setPostText(event.target.value)}} ></textarea>
        </div>
        <button className={`${isDarkMode ? 'bg-[#9896f1]' : 'bg-[#0a192f] border' }  w-[50%] h-[80px] flex justify-center items-center px-4 rounded-b-md   z-10 font-semibold`} onClick={createPost}>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost