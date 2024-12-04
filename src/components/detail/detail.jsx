import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Harshith</h2>
        <p>Louvhg djbd jdb  dbdd</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photodetail">
              <img src="https://www.bing.com/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwHaE7&w=154&h=106&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <span>photo2024.png</span>
            <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoitem">
              <div className="photodetail">
              <img src="https://www.bing.com/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwHaE7&w=154&h=106&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <span>photo2024.png</span>
            <img src="./download.png" alt="" className="icon" />
            </div>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail