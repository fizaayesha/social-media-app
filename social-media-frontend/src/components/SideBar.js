import React, { useState } from "react";
import "./SideBar.css";
import { UserData, MenuData } from "../data";
import CloseFriends from "./CloseFriends";
import MenuBar from "./MenuBar";
const SideBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  
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
        {MenuData.map((p) => (
            <p className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              {isExpanded && <MenuBar key={p._id} user={p} />}
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
