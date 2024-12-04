import Chatlist from "./chatlist/chatlist";
import "./list.css";
import Userinfo from "./userinfo/Userinfo";
const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <Chatlist />
    </div>
  )
}

export default List