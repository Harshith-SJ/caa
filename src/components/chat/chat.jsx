import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

  const handleemoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Harshith</span>
            <p>Lorem ipsum dolor sit .</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
      <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              hello dfgv jhdfg j ifh kfdgh fggh kjdfdghi kj
              kfhgbunbuf
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              hello dfgv jhdfg j ifh kfdgh fggh kjdfdghi kj
              kfhgbunbuf
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              hello dfgv jhdfg j ifh kfdgh fggh kjdfdghi kj
              kfhgbunbuf
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://jooinn.com/images/lonely-tree-reflection-3.jpg" alt="" />
            <p>
              hello dfgv jhdfg j ifh kfdgh fggh kjdfdghi kj
              kfhgbunbuf
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text"  placeholder="Type a message..."
        onChange={(e) => setText(e.target.value)} value={text}
        />
        <div className="emoji">
        <img src="./emoji.png" alt="" 
        onClick={() => setOpen((prev) => !prev)} />
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handleemoji}/>
        </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;