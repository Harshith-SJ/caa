import React from 'react';
import './adduser.css';
const Adduser = () => {
  return (
    <div>
        <form >
            <input type="text" placeholder="Username" name="username"/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Harshith SJ</span>
            </div>
            <button>Adduser</button>
            </div>
        </div>
  );
};

export default Adduser; 