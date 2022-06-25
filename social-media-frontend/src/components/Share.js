import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <ShareStyled>
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={`${PF}orprofile.webp`}
            alt="profile"
          />
          <input
            placeholder="What is in your mind Ayesha"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
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
          <button className="shareshareButton">Post</button>
        </div>
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
              font-size: .7rem;
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
