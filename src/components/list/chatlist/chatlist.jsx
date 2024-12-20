import React, { useState } from 'react';
import "./chatlist.css";
import Adduser from "./adddUser/adduser";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img 
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {addMode && (
        <div className="adduser-container">
          <Adduser />
        </div>
      )}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Harshith</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chatlist;