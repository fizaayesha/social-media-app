import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { MoreVert, Favorite } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { AuthContext } from "../context/AuthContext";
function Posts({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchData();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <PostsStyled>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "defaultprofileimage.png"
                }
                alt="profile"
                crossorigin="anonymous"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate"> {format(post.createdAt)} </span>
          </div>
          <div className="postTopRight">
            <MoreVert className="threedots" />
          </div>
        </div>
        <br></br>
        <hr />
        <div className="postCenter">
          <img
            src={PF + post.image}
            className="postImage"
            alt=""
            crossorigin="anonymous"
          />
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite
              htmlColor="red"
              className="likeIcon"
              onClick={likeHandler}
            />
            {/* <ThumbUp
              htmlColor="blue"
              className="likeIcon"
              onClick={likeHandler}
            /> */}
            <span className="postLikecounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </PostsStyled>
  );
}
const PostsStyled = styled.div`
  padding: 20px;
  background-color: #efefef;
  border: 1px solid #efefef;
  border-radius: 5px;
  position: static;
  margin-top: 2rem;

  .postWrapper {
    .postTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .postTopLeft {
        display: flex;
        align-items: center;
        .postProfileImg {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .postUsername {
          font-size: 18px;
          font-weight: bolder;
          margin: 0 10px;
        }
        .postDate {
          font-size: 12px;
        }
      }
      .postTopRight {
        .threedots {
          cursor: pointer;
        }
      }
    }
    .postCenter {
      margin: 20px 0;
      .postImage {
        width: 100%;
        margin-top: 20px;
        max-height: 500px;
        object-fit: contain;
      }
      .postText {
        margin-top: 1rem;
      }
    }
    .postBottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .postBottomLeft {
        display: flex;
        align-items: center;
        .likeIcon {
          font-size: 1.5rem;
          margin-right: 5px;
          cursor: pointer;
        }
        .postLikecounter {
          font-size: 0.9rem;
          font-weight: bold;
        }
      }
      .postBottomRight {
        .postCommentText {
          cursor: pointer;
          border-bottom: 1px solid black;
          font-size: 0.9rem;
          font-weight: bold;
        }
      }
    }
  }
`;
export default Posts;
