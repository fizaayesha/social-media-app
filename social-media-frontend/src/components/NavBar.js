import React from "react";
import styled from "styled-components";
import { Home } from "@material-ui/icons";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <NavBarStyled>
      <div className="topbar">
        <div className="left">
          <Link to="/">
            <p className="logo">Instagram</p>
          </Link>
        </div>
        <div className="middle">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" className="searchBar" />
        </div>
        <div className="right">
          <div className="icons">
            <Home /> <p>1</p>
            <MessageIcon />
            <p>3</p>
            <FavoriteBorderIcon />
            <p>4</p>
            <AccountCircleOutlinedIcon />
            <p>9</p>
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  .topbar {
    width: 99.85%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.8rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid #efefef;
    .left {
      font-size: 1.9rem;
      margin-right: 15%;
      font-weight: bolder;
      @media (max-width: 790px) and (min-width: 595px) {
        margin-right: 4%;
      }
      @media screen and (max-width: 596px) {
        font-size: 1.2rem;
      }
      .logo {
        margin-left: 10px;
        text-decoration: none;
        color: black;
        
      }
    }
    .middle {
      padding: 4px;
      height: 2rem;
      width: 14rem;
      background-color: #efefef;
      display: flex;
      align-items: center;
      border-radius: 10px;
      &:hover {
        background-color: lightgray;
      }
      @media screen and (max-width: 596px) {
        display: none;
      }
      svg {
        color: grey;
        cursor: pointer;
      }
      .searchBar {
        border-radius: 10px;
        padding: 0.2rem;
        height: 2rem;
        width: 10rem;
        background-color: #efefef;
        outline: none;
        border: none;
        &:hover {
          background-color: lightgray;
        }
      }
    }
    .right {
      margin-left: 15%;
      @media screen and (max-width: 790px) {
        margin-left: 4%;
      }
      @media screen and (max-width: 596px) {
        margin-left: 2%;
      }

      .icons {
        display: flex;
        align-items: center;
        svg {
          margin-right: 15px;
          color: black;
          font-size: 1.6rem;
          cursor: pointer;
          @media screen and (max-width: 596px) {
            margin-right: 10px;
            font-size: 1.2rem;
          }
        }
        .defineColor {
          display: grid;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          h5 {
            color: black;
            position: absolute;
            margin-left: 1.8rem;
          }
        }
        p {
          color: white;
          height: 1rem;
          width: 1rem;
          border-radius: 50%;
          background-color: red;
          font-size: 15px;
          font-weight: bolder;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -27px;
          margin-top: -13px;
          margin-right: 10px;
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
    }
  }
`;
export default NavBar;
