import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import MyProfile from "../components/MyProfile";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";
import Share from "../components/Share";
import SideBar from "../components/SideBar";
import { useParams } from "react-router";
function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchData();
  }, [username]);
  return (
    <>
      <NavBar />
      <ProfileStyled>
        <SideBar />
        <MyProfileStyled>
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "defaultcoverimage.jfif"
                  }
                  crossOrigin="anonymous"
                  alt="profile"
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "defaultprofileimage.png"
                  }
                  crossOrigin="anonymous"
                  alt="profile2"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName"> {user.username} </h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
          </div>

          <div className="myProfile">
            <Share />
          </div>
        </MyProfileStyled>{" "}
        <RightBar user={user} />
      </ProfileStyled>
    </>
  );
}
const ProfileStyled = styled.div`
  display: flex;
  .profileRight {
    flex: 9;
    .profileRightBottom {
      display: flex;
    }
  }
`;

const MyProfileStyled = styled.div`
  flex: 10;
  margin-left: 15rem;
  margin-right: 4rem;
  margin-top: 2rem;
  @media (max-width: 1050px) and (min-width: 700px) {
    margin-left: 10rem;
    margin-right: 5rem;
  }
  @media (max-width: 700px) and (min-width: 300px) {
    margin-left: 4rem;
    margin-right: 2rem;
  }
  .profileRight {
    padding: 20px;
    background-color: #efefef;
    border: 1px solid #efefef;
    border-radius: 5px;
    position: static;
    /* margin-top: 60%; */

    .profileRightTop {
      .profileCover {
        height: 320px;
        position: relative;
        .profileCoverImg {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .profileUserImg {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          top: 150px;
          border: 2px solid white;
        }
      }
      .profileInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        .profileInfoName {
          font-size: 1.2rem;
          font-weight: bolder;
        }
        .profileInfoDesc {
          font-size: 1rem;
        }
      }
    }
  }
  .myProfile {
    padding: 20px;
    background-color: #efefef;
    border: 1px solid #efefef;
    border-radius: 5px;
    position: static;
    margin-top: 10%;
  }
`;

export default Profile;
