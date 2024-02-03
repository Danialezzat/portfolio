import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <div>
        <h1>Create a Post</h1>
        <div className='inputGroup'>
          <label htmlFor="title">Title</label>
          <input id='title' type="text" placeholder='Title...' />
        </div>
        <div className='inputGroup'>
        <label htmlFor="post">post</label>
        <textarea name="" id="post" placeholder='Write here...' cols="30" rows="10"></textarea>
        </div>
        <button>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost