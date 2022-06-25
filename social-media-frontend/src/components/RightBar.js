import React from "react";
import styled from "styled-components";
import { UserData } from "../data";
import OnlineFriends from "./OnlineFriends";
function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <h4 className="rightTitle">Online friends</h4>
        <ul className="rightBarFriendList">
          {UserData.map((p) => (
            <OnlineFriends key={p.id} user={p} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">My Profile</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">RelationShip:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">Friend List</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              crossorigin="anonymous"
              alt="profile"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src={`${PF}orprofile.webp`}
              alt="profile"
              crossorigin="anonymous"
            />
            <span className="rightBarFollowingName">Fiza Khan</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <RightBarStyled>
      <div className="rightWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </RightBarStyled>
  );
}
const RightBarStyled = styled.div`
  flex: 4;
  margin-right: 0%;
  @media screen and (max-width: 885px) {
    display: none;
  }
  .rightWrapper {
    padding: 20px 20px 0 0;
    .rightTitle {
      font-size: 1.2rem;
      font-weight: bolder;
      margin-bottom: 1rem;
      border-bottom: 2px solid blue;
      width: max-content;
    }
    .rightBarTitle {
      font-size: 18px;
      border-bottom: 4px solid black;
      width: max-content;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    .rightBarInfo {
      margin-bottom: 30px;
      .rightBarInfoItem {
        margin-bottom: 10px;
        .rightBarInfoKey {
        }
        .rightBarInfoValue {
          font-weight: bold;
          border-bottom: 2px solid black;
          width: max-content;
        }
      }
    }
    .rightBarFollowings {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .rightBarFollowing {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .rightBarFollowingImage {
          width: 5.9rem;
          height: 5.9rem;
          border-radius: 50%;
          object-fit: cover;
        }
        .rightBarFollowingName {
          font-size: 16px;
          font-weight: bolder;
        }
      }
    }
  }
`;
export default RightBar;
