import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.image = fileName;
      try {
        await axios.post("/upload", data
        // , {
        //   method: "POST",
        //   headers: {
        //     accept: "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     "content-type": "application/x-www-form-urlencoded",
        //     "Access-Control-Allow-Credentials": "true",
        //   },
        // }
        );
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("/posts", newPost
      // , {
      //   method: "POST",
      //   headers: {
      //     accept: "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     "content-type": "application/x-www-form-urlencoded",
      //     "Access-Control-Allow-Credentials": "true",
      //   },
      // }
      );
      window.location.reload();
    } catch (error) {}
  };
  return (
    <ShareStyled>
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "defaultprofileimage.png"
            }
            alt="profile"
            crossOrigin="anonymous"
          />
          <input
            placeholder={user.username + " you can start posting from here"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButton" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                name="file"
                onChange={(e) => setFile(e.target.file[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Expressions</span>
            </div>
          </div>
          <button className="shareshareButton" type="submit">
            Post
          </button>
        </form>
      </div>
    </ShareStyled>
  );
}
const ShareStyled = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.11);
  box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.11);
  background-color: white;
  .shareWrapper {
    padding: 10px;
    .shareTop {
      display: flex;

      .shareProfileImg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid lightgray;
        margin-right: 10px;
      }
      .shareInput {
        border: none;
        width: 80%;
        &:focus {
          outline: none;
        }
      }
    }
    .shareHr {
      margin: 20px;
    }
    .shareButton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shareOptions {
        display: flex;
        margin-left: 20px;
        .shareOption {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-right: 2rem;
          cursor: pointer;
          @media screen and (max-width: 585px) {
            margin-right: 1rem;
          }
          .shareIcon {
            font-size: 18px;
            margin-right: 2px;
            @media screen and (max-width: 585px) {
              font-size: 15px;
            }
          }
          .shareOptionText {
            font-size: 1rem;
            font-weight: bolder;
            @media screen and (max-width: 585px) {
              font-size: 0.7rem;
            }
          }
        }
      }
      .shareshareButton {
        border: none;
        padding: 7px;
        border-radius: 5px;
        background-color: green;
        color: white;
        font-weight: bold;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
`;
export default Share;
