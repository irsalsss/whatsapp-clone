import { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon, Mic } from "@material-ui/icons";
import './Chat.css';

const Chat = () => {
  const [input, setInput] = useState('');

  const sendMessage = () => {

  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Sonny</span>
          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Sonny</span>
          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>

    </div>
  )
}

export default Chat;