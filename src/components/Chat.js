import React, { useState, useRef, useEffect } from "react";

function Chat(props) {
  const [inputValue, setInputValue] = useState("");
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="flex-column bg-gray-100 border rounded-l p-4">
      <div className="pb-2">Chatting with: {props.name}</div>
      <hr />
      <div className="h-40 p-4 bg-white my-4 rounded">{inputValue}</div>
      <form class="w-full max-w-sm">
        <div class="flex items-center py-2">
          <label>
            <input
              ref={input}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-100"
              aria-label="Chat"
              autoComplete="off"
              type="text"
              placeholder="Type something..."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </label>
          <button
            class="flex-shrink-0 border-transparent border-4 bg-black text-white hover:bg-gray-900 text-sm py-1 px-2 rounded"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
