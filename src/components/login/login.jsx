import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { storeImage } from '../../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const [loading,setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const { email, password } = Object.fromEntries(formData);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error logging in: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      let imageUrl = null;
      if (avatar.file) {
        imageUrl = await storeImage(res.user.uid, avatar.file);
      }

      await setDoc(doc(db, "users", res.user.uid), {
        username, 
        email,
        id: res.user.uid,
        avatar: imageUrl,
        blocked: [],
      });

      toast.success("Account created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error creating account: " + error.message);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit" disabled={loading}>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="Avatar" />
            <input type="file" id="file" onChange={handleAvatar} />
          </label>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit" aria-disabled={loading}>Register</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;