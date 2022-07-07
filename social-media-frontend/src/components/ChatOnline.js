import React from "react";
import styled from "styled-components";

function ChatOnline() {
  return (
    <ChatOnlineStyled>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            className="chatOnlineImage"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineBadge">Ayesha Khan</span>
      </div>
    </ChatOnlineStyled>
  );
}
const ChatOnlineStyled = styled.div`
  .chatOnlineFriend {
    display: flex;
    align-items: center;
    font-weight: bolder;
    cursor: pointer;
    margin: 1rem;
    .chatOnlineImgContainer {
      position: relative;
      margin-right: 10px;
      .chatOnlineImage {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid lightgray;
      }
      .chatOnlineBadge {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        background-color: limegreen;
        top: 2px;
        right: 2px;
      }
    }
  }
`;
export default ChatOnline;
