import React, { useEffect } from "react";
import { FaUserAlt, FaVideo, FaCamera, FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import "./bnav.css";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions";
import store from "../../../store";
import { loadUser } from "../../../actions/userAction";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
store.dispatch(loadUser());
  }, [])
  return (
    <div className="bottomNav">
      <ul>
        <Link to="/">
          <li>
            <FaHome />
          </li>
        </Link>
        <Link to="/posts">
          <li>
            <FaCamera />
          </li>
        </Link>
        <Link to="/reels">
          <li>
            <FaVideo />
          </li>
        </Link>
        <Link to="/">
          <li>
            <AiFillMessage />
          </li>
        </Link>
        <Link to="/login">
          <li>
            <FaUserAlt />
          </li>
        </Link>
        {isAuthenticated && <UserOptions user={user} />}
      </ul>
    </div>
  );
};

export default BottomNav;
