import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const Header = () => {
  return (
    <div className="header">
      <div className="left_container">
        {/* All icons here */}
        <div className="header_icon header_icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header_icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header_icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header_icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>

        <div className="header_icon">
          <SearchIcon />
          <p>Home</p>
        </div>

        <div className="header_icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <div className="right_container">
        {/* logo */}
        <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" />
      </div>
    </div>
  );
};
