import { SearchOutlined, SendRounded } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatMessage from "../components/ChatMessage";
import ChatOnline from "../components/ChatOnline";
import Conversation from "../components/Conversation";
import NavBar from "../components/NavBar";
import { AuthContext } from "../context/AuthContext";
import { io } from "socket.io-client";
function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newmessage, setNewmessage] = useState("");
  const socket = useRef(io("ws://localhost:8900"));
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user]);

  // useEffect(()=>{
  //   socket?.on("welcome",message=>{
  //     console.log(message);
  //   })
  // },[socket])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  // console.log(messages);
  const handleSubmit = async (e) => {
    e.prevetDefault();
    const message = {
      sender: user._id,
      text: newmessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post("/messages", message);
      setMessages([...message, res.data]);
      setNewmessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <NavBar />
      <ChatStyled>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <div className="middle">
              <SearchOutlined />
              <input
                type="text"
                placeholder="Search"
                className="chatMenuInput"
              />
            </div>
            <div className="chatFriends">
              {conversations.map((c, i) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation key={i} conversation={c} currentUser={user} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => {
                    <div ref={scrollRef}>
                      <ChatMessage message={m} own={m.sender === user._id} />;
                    </div>;
                  })}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="write something"
                    className="chatMessageInput"
                    onChange={(e) => setNewmessage(e.target.value)}
                    value={newmessage}
                  ></textarea>
                  <button
                    className="chatMessageSendButton"
                    onClick={handleSubmit}
                  >
                    <SendRounded className="sendMessage" htmlColor="white" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="noConversation">
                  Open a Conversation to start a chat
                </span>
              </>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </ChatStyled>
    </>
  );
}
const ChatStyled = styled.div`
  height: calc(100vh-70px);
  margin: 0;
  padding: 0;
  display: flex;
  .chatMenu {
    flex: 2;
    background-color: #efefef;

    .chatMenuWrapper {
      padding: 10px;
      height: 100%;
      .middle {
        padding: 4px;
        height: 2rem;
        width: 14rem;
        background-color: lightgray;
        display: flex;
        align-items: center;
        border-radius: 10px;
        &:hover {
          background-color: gray;
          svg {
            color: white;
          }
        }
        @media screen and (max-width: 596px) {
          display: none;
        }
        svg {
          color: grey;
          cursor: pointer;
        }
        .chatMenuInput {
          border-radius: 10px;
          padding: 0.2rem;
          height: 2rem;
          width: 10rem;
          background-color: lightgray;
          outline: none;
          border: none;
          &:hover {
            background-color: gray;
            color: white;
          }
        }
      }
      .chatFriends {
        height: 80vh;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          border-radius: 10px;
          width: 9px;
          background-color: gray;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: lightgray;
        }
        &::-webkit-scrollbar-track {
          border-radius: 10px;
          background-color: gray;
        }
      }
    }
  }
  .chatBox {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    flex: 5.5;
    .chatBoxWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .chatBoxTop {
        height: 80vh;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          border-radius: 10px;
          width: 9px;
          background-color: gray;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: lightgray;
        }
        &::-webkit-scrollbar-track {
          border-radius: 10px;
          background-color: gray;
        }
      }
      .chatBoxBottom {
        margin-top: 5px;
        display: flex;
        align-items: center;
        padding: 5px;
        justify-content: space-between;
        .chatMessageInput {
          border-radius: 10px;
          padding: 5px;
          height: 2rem;
          width: 90%;
          background-color: #efefef;
          outline: none;
          border: none;
          font-weight: bold;
        }
        .chatMessageSendButton {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: black;
          border: none;
          cursor: pointer;
          .sendMessage {
            font-size: 30px;
            margin-left: 2px;
            margin-top: 2px;
          }
        }
      }
      .noConversation {
        position: absolute;
        margin-top: 40vh;
        font-weight: bolder;
        font-size: 20px;
        color: grey;
      }
    }
  }
  .chatOnline {
    flex: 3;
  }
`;
export default Messenger;
