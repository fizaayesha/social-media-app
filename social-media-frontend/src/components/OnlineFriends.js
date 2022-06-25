import React from "react";
import styled from "styled-components";
function OnlineFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <OnlineFriendsStyled>
      <li className="rightBarFriend">
        <div className="rightBarProfileImageContainer">
          <img
            src={PF + user.profilePicture}
            alt="profile"
            className="rightProfileImage"
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightbarUsername">
          <strong>{user.username}</strong>
        </span>
      </li>
    </OnlineFriendsStyled>
  );
}
const OnlineFriendsStyled = styled.div`
  .rightBarFriend {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .rightBarProfileImageContainer {
      margin-right: 10px;
      position: relative;
      .rightProfileImage {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        object-fit: cover;
      }
      .rightBarOnline {
        color: white;
        position: absolute;
        height: 0.9rem;
        width: 0.9rem;
        border-radius: 50%;
        background-color: #01df01;
        font-size: 15px;
        font-weight: bolder;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-left: 1.3rem;
        margin-top: -2.5rem;
        border: 2px solid white;
        @media screen and (max-width: 596px) {
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 50%;
          margin-left: -21px;
          margin-top: -13px;
          font-size: 10px;
          margin-right: 10px;
        }
      }
    }
    .rightbarUsername {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;
export default OnlineFriends;
