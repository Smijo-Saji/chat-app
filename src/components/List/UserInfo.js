import React from "react";
import "./UserInfo.css";
import { useUserStore } from "../../library/userStore";
import { auth } from "../../library/firebase";

function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <div className="userinfo">
      <div className="user user-flex">
        <img src={currentUser.avatar || "img/avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="img/more.png" alt="" />
        <img src="img/edit.png" alt="" />
        <div className="hover-text">
          <img src="img/logout.png" alt="" onClick={() => auth.signOut()} />
          <span class="tooltip-text" id="bottom">
            Log-Out
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
