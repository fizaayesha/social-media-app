import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function MenuBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <MenuBarStyled>
      <li className="rightBarFriend">
        <div className="rightBarProfileImageContainer">
          {/* <img
            src={PF + user.logo}
            alt="profile"
            className="rightProfileImage"
            crossOrigin="anonymous"
          /> */}
        </div>
        <span className="rightbarUsername">
          <Link to={user.link}>
            <strong>{user.text}</strong>
          </Link>
        </span>
      </li>
    </MenuBarStyled>
  );
}
const MenuBarStyled = styled.div`
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
      strong {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
export default MenuBar;
