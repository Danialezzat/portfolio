import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")



  return (
    <div>
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
        <button>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost