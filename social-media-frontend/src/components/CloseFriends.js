import React from "react";
import styled from "styled-components";
function CloseFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <CloseFriendsStyled>
      <li className="rightBarFriend">
        <div className="rightBarProfileImageContainer">
          <img
            src={PF + user.profilePicture}
            alt="profile"
            className="rightProfileImage"
            crossOrigin="anonymous"
          />
        </div>
        <span className="rightbarUsername">
          <strong>{user.username}</strong>
        </span>
      </li>
    </CloseFriendsStyled>
  );
}
const CloseFriendsStyled = styled.div`
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
    }
    .rightbarUsername {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;
export default CloseFriends;
