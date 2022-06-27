import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import MyProfile from "../components/MyProfile";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";
import Share from "../components/Share";
import SideBar from "../components/SideBar";
import { useParams } from "react-router";
import Posts from "../components/Posts";
import Feed from "../components/Feed";
function MyPosts() {
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
          <div className="myProfile">
            <Feed username={username} />
          </div>
        </MyProfileStyled>
      </ProfileStyled>
    </>
  );
}
const ProfileStyled = styled.div`
  .myProfile {
    display: flex;
  }
`;

const MyProfileStyled = styled.div``;

export default MyPosts;
