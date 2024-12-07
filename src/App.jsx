import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import { useUserStore } from './lib/userStore'; 

const App = () => {
  const auth = getAuth();
  const { currentUser,isLoading,fetchUserInfo } = useUserStore();
  

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      }
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);
  
  if(isLoading) return <div className="loading">Loading....</div>
  return (
    <div className='container'>
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;