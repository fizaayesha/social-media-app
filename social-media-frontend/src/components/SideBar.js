import React, { useState } from "react";
import "./SideBar.css";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MessageIcon from "@material-ui/icons/Message";
import GroupIcon from "@material-ui/icons/Group";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { UserData } from "../data";
import CloseFriends from "./CloseFriends";
const SideBar = () => {
  const feed = <DynamicFeedIcon />;
  const msg = <MessageIcon />;
  const videos = <VideoLibraryIcon />;
  const group = <GroupIcon />;
  const bmark = <BookmarkIcon />;
  const [isExpanded, setExpendState] = useState(false);
  const menuItems1 = [
    {
      logo: feed,
      text: "Feed",
    },
    {
      logo: msg,
      text: "Chats",
    },
    {
      logo: videos,
      text: "Videos",
    },
    {
      logo: group,
      text: "Groups",
    },
    {
      logo: bmark,
      text: "Bookmarks",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <h4 style={{ marginTop: "9px" }}>Menu</h4>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems1.map(({ logo, text }) => (
            <p className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              {isExpanded && (
                <li>
                  {logo}
                  {text}
                  <div className="hori"></div>
                </li>
              )}
            </p>
          ))}
          <div className="friendList">
            <div className="fri"></div>
          </div>
          {UserData.map((p) => (
            <p className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              {isExpanded && <CloseFriends key={p._id} user={p} />}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
