import React from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <>
      <NavBar />
      <HomeStyled>
        <SideBar />
        <Feed username="Aliya" />
        <RightBar profile />
      </HomeStyled>
    </>
  );
}
const HomeStyled = styled.div`
  display: flex;
`;
export default Home;
