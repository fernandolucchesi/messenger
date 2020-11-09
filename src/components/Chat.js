import React, { useState, useContext, useRef, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { ContactListContext } from "../contexts/ContactListContext";

function Chat(props) {
  const [inputValue, setInputValue] = useState("");
  const input = useRef(null);
  const { setShowChat } = useContext(ChatContext);
  const { setMessageForContact } = useContext(ContactListContext);

  const sendMessage = (id, e) => {
    e.preventDefault();
    setMessageForContact(id, inputValue);
    setInputValue("");
    input.current.focus();
  };

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="flex-column bg-gray-100 border rounded-l p-4">
      <div className="w-100 flex justify-end">
        <div className="cursor-pointer" onClick={() => setShowChat(undefined)}>
          <svg
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001"
          >
            <path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" />
          </svg>
        </div>
      </div>
      <div className="pb-2">Chatting with: {props.contact.name}</div>
      <hr />
      <div
        style={{ height: 300 }}
        className="p-4 bg-white my-4 rounded overflow-y-auto rounded"
      >
        {props.contact &&
          props.contact.messages.map((message, index) => {
            return <p key={index}>{message}</p>;
          })}
      </div>
      <div className="w-full max-w-sm">
        <form className="flex items-center py-2">
          <label>
            <input
              ref={input}
              className="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-600 py-1 px-2 leading-tight focus:outline-none bg-gray-100"
              aria-label="Chat"
              autoComplete="off"
              type="text"
              placeholder="Type something..."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </label>
          <button
            onClick={(e) => {
              sendMessage(props.contact.id, e);
            }}
            className="mx-4 my-2 flex-shrink-0 border-transparent border-b border-4 bg-black text-white hover:bg-gray-900 text-sm py-1 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
