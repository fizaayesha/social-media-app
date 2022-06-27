import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserData } from "../data";
import OnlineFriends from "./OnlineFriends";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

// import { Add } from "@material-ui/icons";
function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

  // useEffect(() => {
  //   setFollowed(currentUser.followings.includes(user?.id));
  // }, [currentUser, user.id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);
  const followHandler = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };
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
        {user.username !== currentUser.username && (
          <button className="followButton" onClick={followHandler}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
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
          {friends.map((friend) => (
            <div className="rightBarFollowing">
              <Link to={"/profile/" + friend.username}>
                <img
                  className="rightBarFollowingImage"
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "defaultprofileimage.png"
                  }
                  alt="profile"
                  crossOrigin="anonymous"
                />
              </Link>
              <span className="rightBarFollowingName">{friend.username}</span>
            </div>
          ))}
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
  .followButton {
    background-color: green;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: bolder;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: darkgreen;
    }
    svg {
      font-size: 1rem;
    }
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
