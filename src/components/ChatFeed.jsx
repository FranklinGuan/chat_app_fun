import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  
  const { chats, activeChat, userName, messages } = props;

  const chat = chats 

  console.log(props);

  return <div>ChatFeed</div>;
};

export default ChatFeed;
