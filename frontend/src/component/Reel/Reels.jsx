import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";

import "./reel.css";

const Reel = () => {
  return (
    <div className="reel">
     
     
      <div className="reels_container">
        <ul>
          <li className="reel_container">
            <div className="reel_vid"></div>
            <ul>
              <li className="reel_icon">
                <AiOutlineHeart />
              </li>
              <li className="reel_icon">
                <FaComment />
              </li>
              <li className="reel_icon">
                <FaShare />
              </li>
            </ul>
          </li>
          <li className="reel_container">
            <div className="reel_vid"></div>
            <ul>
              <li className="reel_icon">
                <AiOutlineHeart />
              </li>
              <li className="reel_icon">
                <FaComment />
              </li>
              <li className="reel_icon">
                <FaShare />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reel;
