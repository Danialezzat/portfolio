import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import {ref, uploadBytesResumable, getDownloadURL } from"firebase/storage" ////////



const CreatePost = ({ isAuth, isDarkMode }) => {
  const navigate = useNavigate();
 

  // const [percent, setPercent] = useState(0) // pescentage is going to added later
  const [formData, setFormData] = useState({
    title: "",
    context: "",
    image: ""
  });
  
// updating state function for image
  const handleImageChange = (event) => {
    setFormData({...formData, image: event.target.files[0]})
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }


  const postsCollectionRef = collection(db, "post");


  const createPost = async () => {
  try {
    // Upload image to Firebase Storage
    console.log(formData.image.name)
    const storageRef = ref(storage, `/image/${formData.image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, formData.image);
console.log(uploadTask)
    uploadTask.on(
      // "state_changed",
      // (snapshot) => {const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      //     // update progress
      //     setPercent(percent);
      // },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);
               addDoc(postsCollectionRef, {
                title: formData.title,
                postText: formData.context,
                imageUrl: url,
                author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
                createdAt: new Date(),
          });
      }
  ); 


    });

    navigate("/bloghome");
  } catch (error) {
    console.log("Error creating post:", error);
  }
};

  useEffect(() => {
    if (!isAuth) {
      navigate("/bloghome/bloglogin");
    }
  }, [isAuth, navigate]);

  return (
    <form onSubmit={createPost}>
      <div className="h-screen w-full flex flex-col justify-cneter items-center ">
        <div className="h-screen w-full flex flex-col justify-center items-center ">
          <h1
            className={`${
              isDarkMode ? "bg-[#eaf6f6]" : "bg-[#0a192f] border"
            }  w-[50%] h-[80px] flex justify-center items-center px-4 rounded-t-md   z-10 font-semibold`}
          >
            Create a Post
          </h1>
          <div className="bg-[#ccd6f6] p-2 w-[50%]">
            <input
              className="bg-[#ccd6f6] text-black w-full outline-none"
              id="title"
              type="text"
              placeholder="Title..."
              onChange={handleChange}
              name="title"
              value={formData.title}
              required
            />
          </div>
          <div className="bg-[#ccd6f6] p-2 w-[50%]">
            <textarea
              className="bg-[#ccd6f6] text-black w-full  outline-none"
              name="context"
              id="post"
              placeholder="Write here..."
              onChange={handleChange}
              value={formData.context}
              required
            ></textarea>
          </div>
          
          <input
            type="file"
            accept='image/*'
            name="image"
            onChange={(event) => handleImageChange(event)}
          />
          {formData.title && formData.context && formData.image  &&<button
            className={`${
              isDarkMode ? "bg-[#4e4cf4]" : "bg-[#0a192f] border"
            }  w-[50%] h-[80px] flex justify-center items-center px-4 rounded-b-md   z-10 font-semibold`}
            onClick={createPost}
          >
            Submit post
          </button>}
          {/* <p>{percent} "% done"</p> percentage is going to be adde later */}
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
