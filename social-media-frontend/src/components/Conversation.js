import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <ConversationStyled>
      <img
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "defaultprofileimage.png"
        }
        alt=""
        className="conversationImage"
        crossOrigin="anonymous"
      />
      <span className="ConversationName">{user?.username}</span>
    </ConversationStyled>
  );
}
const ConversationStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 10px;
  margin-top: 10px;

  cursor: pointer;
  &:hover {
    background-color: white;
  }
  .conversationImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  .ConversationName {
    font-weight: bold;
  }
`;
export default Conversation;
