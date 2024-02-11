import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; ////////

const CreatePost = ({ isAuth, isDarkMode }) => {
  const navigate = useNavigate();

  // const [percent, setPercent] = useState(0) // pescentage is going to added later
  const [formData, setFormData] = useState({
    title: "",
    context: "",
    image: "",
  });

  // updating state function for image
  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

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
      console.log(formData.image.name);
      const storageRef = ref(storage, `/image/${formData.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.image);
      console.log(uploadTask);
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
              author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
              },
              createdAt: new Date(),
            });
          });
        }
      );

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
      <div className="h-screen w-full flex flex-col justify-center items-center  ">
        <div className="h-[470px] w-[70%] md:w-[400px] bg-white text-black rounded-lg p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="w-full text-center font-mono font-bold text-4xl p-6 mb-10 border-b-2">
            Create a Post
          </h1>
          <div
            className="w-full relative before:absolute before:content-['Title...'] before:font-semibold 
            before:top-[10px] before:left-[10px] focus-within:before:font-bold focus-within:before:top-[-15px]  focus-within:before:bg-white before:duration-300 border border-[#adadad] rounded-lg"
          >
            <input
              className="w-full h-[40px] p-2 rounded-lg mb-6 outline-none "
              id="title"
              type="text"
              onChange={handleChange}
              name="title"
              value={formData.title}
              required
            />
          </div>
          <div className="w-full relative    before:absolute before:content-['write_here...'] before:font-semibold focus-within:before:font-bold
          before:top-[10px] before:left-[10px]
          focus-within:before:top-[-15px] focus-within:before:bg-white before:duration-300 border border-[#adadad] rounded-lg my-4">
            <textarea
              className="w-full h-[100px] p-2 rounded-lg mb-2 outline-none "
              name="context"
              id="post"
              onChange={handleChange}
              value={formData.context}
              required
            ></textarea>
          </div>

          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(event) => handleImageChange(event)}
          />
          {formData.title && formData.context && formData.image && (
            <button className="w-full h-[50px] mt-4 font-bold text-white text-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2" onClick={createPost}>
              Submit post
            </button>
          )}
          {/* <p>{percent} "% done"</p> percentage is going to be adde later */}
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
