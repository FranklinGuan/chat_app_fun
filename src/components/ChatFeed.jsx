import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const massage =messages[key];
      const lastMessagesKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === messages.sender.username;

      return (
        <div key={`msg_${index}`} style={{width:'100%'}}>
          <div className="message-block"> 
            {
              isMyMessage ? <MyMessage /> : <TheirMessage />
            }
          </div>
          <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px': '68px'}}> 
            read-recipets
          </div>
        </div>
      );
    })

    // console.log(keys)
  }

  renderMessages()

  
  // console.log(chat, userName, messages);

  return (<div>ChatFeed</div>);
};

export default ChatFeed;
