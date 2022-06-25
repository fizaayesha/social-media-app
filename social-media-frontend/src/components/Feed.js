import Share from "./Share";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import axios from "axios";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("posts/timeline/62b16dc02b74c6db0a0e726f");
      setPosts(res.data);
    };
    fetchData();
  }, [username]);

  return (
    <FeedStyled>
      <div className="feed">
        <Share />
      </div>
      {posts.map((p) => (
        <Posts key={p._id} post={p} />
      ))}
    </FeedStyled>
  );
}
const FeedStyled = styled.div`
  flex: 10;
  margin-left: 15rem;
  margin-right: 4rem;
  margin-top: 2rem;
  @media (max-width: 1050px) and (min-width: 885px) {
    margin-left: 10rem;
    margin-right: 5rem;
  }
  @media (max-width: 885px) and (min-width: 700px) {
    margin-left: 7rem;
    margin-right: 3.5rem;
  }
  @media (max-width: 700px) and (min-width: 550px) {
    margin-left: 4rem;
    margin-right: 2rem;
  }
  .feed {
    padding: 20px;
    background-color: #efefef;
    border: 1px solid #efefef;
    border-radius: 5px;
    position: static;
    @media (max-width: 700px) {
      padding: 10px;
    }
  }
`;
export default Feed;