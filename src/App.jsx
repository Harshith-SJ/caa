import React from 'react';
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import UploadComponent from './UploadComponent'; // Import the UploadComponent

const App = () => {
  const user = false;

  return (
    <div className='container'>
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
          <UploadComponent /> {/* Add the UploadComponent here */}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;