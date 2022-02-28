import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed"

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="RabbitKing"
      userSecret="123456"
      projectID="9415883b-2709-4cd4-a06a-5954d651ad66"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
