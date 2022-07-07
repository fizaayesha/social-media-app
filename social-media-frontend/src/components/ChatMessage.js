import React from "react";
import styled from "styled-components";
import { format } from "timeago.js";
function ChatMessage({ message, own }) {
  return (
    <ChatMessageStyled>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="messageTopImage"
          />
          <p className="messageTopText">{message.text} </p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      </div>
    </ChatMessageStyled>
  );
}
const ChatMessageStyled = styled.div`
  padding: 5px;
  .message {
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
    .messageTop {
      display: flex;
      .messageTopImage {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
      .messageTopText {
        padding: 10px;
        border-radius: 10px;
        background-color: lightgray;
        font-weight: bold;
        font-size: 0.9rem;
        max-width: 350px;
      }
    }
    .messageBottom {
      font-weight: bold;
      font-size: 0.8rem;
      margin-top: 10px;
      color: black;
    }
  }
  .message.own {
    align-items: flex-end;
    .messageTop {
      .messageTopText {
        background-color: gray;
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 0.9rem;
        max-width: 350px;
      }
    }
  }
`;
export default ChatMessage;
